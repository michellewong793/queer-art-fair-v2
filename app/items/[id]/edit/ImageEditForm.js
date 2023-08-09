'use client'
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import Label from '../../../components/forms/label'
import Input from '../../../components/forms/input'
import styles from './ImageEditForm.module.css'
import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import DeletableImage from "../../../components/DeletableImage"

export default function DetailEditForm( props ) {
    const item = props?.item
    const supabase = createClientComponentClient()

    const [images, setImages] = useState([])
    const [imageError, setImageError] = useState(null)

    // finds an uploaded images alt text based on its url
    function findAltFromUrl(url) {
        let index = item?.image_urls.indexOf(url)

        if (index < item?.alt_text.length) return item?.alt_text[index]

        return ''
    }

    // run this when the page is loaded, to get the images that are already in the database
    async function getDatabaseImages() {
        // get a list of the images in the database
        const { data, error } = await supabase
            .storage
            .from('item-photos')
            .list(item?.id + '/')
        
        if (error) {
            alert(error.message)
            return []
        }
        

        // get each of the images' urls
        let imageNames = data
        let databaseImages = []
        for (let i = 0; i < imageNames.length; i ++) {
            let name = imageNames[i].name
            const { data } = await supabase
                .storage
                .from('item-photos')
                .getPublicUrl(item?.id+'/'+name)
            let image = {
                name: imageNames[i].name,
                uploaded: true,
                deleted: false,
                file: null,
                url: data?.publicUrl,
                alt: findAltFromUrl(data?.publicUrl)
            }
            databaseImages.push(image)
        }

        // set the image list equal to the list of images from the database
        setImages(databaseImages)
    }

    useEffect(() => {
        if (!item) return;

        getDatabaseImages()
    }, [item])

    // use this to process an image that has been uploaded locally
    async function getLocalImage(data) {
        let file = data.files[0];
        if (file) {
            let url = URL.createObjectURL(file)
            let image = {
                name: uuidv4(),
                uploaded: false,
                deleted: false,
                file: file,
                url: url,
                alt: ''
            }
            setImages(images => [ ...images, image]);
        }
    }

    async function localDeleteImage(imageToDelete) {
        const updatedImages = images.map((image) => {
            if (image.name == imageToDelete.name) {
                return {
                    name: imageToDelete.name,
                    uploaded: imageToDelete.uploaded,
                    deleted: true,
                    file: imageToDelete.file,
                    url: imageToDelete.url,
                    alt: imageToDelete.alt
                }
            } else {
                return image
            }
        })

        setImages(updatedImages)
    }

    async function saveChangesToDatabase() {
        // keep track of the public urls and alt text
        let publicUrls = []
        let altText = []

        // upload the images
        for (let image of images) {

            // if the image has been uploaded to the database, but the shopowner has deleted it
            if (image.uploaded && image.deleted) {
                const { data, error } = await supabase
                    .storage
                    .from('item-photos')
                    .remove(item?.id+'/'+image.name)
                
                if (error) {
                    alert(error.message)
                }
                continue
            }

            // if the image hasn't been uploaded, and hasn't been deleted
            if (!image.uploaded && !image.deleted) {
                const { data, error } = await supabase
                    .storage
                    .from('item-photos')
                    .upload(item?.id + '/' + image.name, image.file)
                if (error) {
                    alert(error.message)
                }
                else if (data) {
                    // get the public url
                    const {data} = await supabase
                        .storage
                        .from('item-photos')
                        .getPublicUrl(item?.id+'/'+image.name)
                    if (data) image.url = data.publicUrl
                }

            }
            publicUrls.push(image.url)
            altText.push(image.alt)
            console.log(image.alt)
        }

        // create the new url array
        // replace the old public urls with the new ones
        const { error } = await supabase
            .from('items')
            .update({ 
                image_urls: publicUrls,
                alt_text: altText
            })
            .eq('id', item?.id)
        
        if (error) {
            alert(error.message)
        }

        alert('Changes to images were successfully saved.')

        await getDatabaseImages()
    }


    function checkFields() {
        let error = false;
        if (!images || images?.length == 0) {
            setImageError('*Images are required.')
            error = true;
        }

        return error
    }

    async function updateItem(e) {
        e.preventDefault()
        if (checkFields()) return

        await saveChangesToDatabase()
        
    }
    return (
        <div>
        <h2>Item Images</h2>
        <form onSubmit={(e) => updateItem(e)}>
            <Label><strong>Images*</strong></Label>
            
            <div className={styles.images}>
            {images.map(image => {
                if (image.deleted) {
                    return
                }
                return (
                    <div>
                    <DeletableImage
                        imageUrl={image.url}
                        deleteFunction={() => {localDeleteImage(image)}}
                    />
                    <Input
                        type='textarea'
                        placeholder='alt text for image'
                        defaultValue={image.alt}
                        onChange={(data) => 
                            setImages(images.map((i) => {
                                if (i.name == image.name) {
                                    return {
                                        name: image.name,
                                        uploaded: image.uploaded,
                                        deleted: image.deleted,
                                        file: image.file,
                                        url: image.url,
                                        alt: data.value
                                    }
                                } else {
                                    return i
                                }
                            })
                        )}
                    />
                    </div>
                )
            })}
            <Input
                ariaLabel='Upload new image'
                className={styles.fileInput}
                type='file'
                accept="image/png, image/jpeg, image/jpg"
                onChange={(data) => getLocalImage(data)}
                error={imageError}
            />
            
            </div>

            
            <Input 
                type="submit"
                value="Update images"
            />
        </form>
        </div>
    )
}

