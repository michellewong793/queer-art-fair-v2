'use client'
import Label from '../../../components/forms/label'
import Input from '../../../components/forms/input'
import styles from './ImageEditForm.module.css'
import { useEffect, useState } from 'react'
import DeletableImage from "../../../components/DeletableImage"
import { getDatabaseImages, getLocalImage, deleteLocalImage, updateDatabaseImages } from '../../../components/imageHandler'

export default function DetailEditForm( props ) {
    const item = props?.item
    const [images, setImages] = useState([])
    const [imageError, setImageError] = useState(null)

    // load the images as soon as the item is loaded, or if the item changes for some reason
    useEffect(() => {
        if (!item) return;

        async function loadImages() {
            setImages(await getDatabaseImages(item))
        }

        loadImages()
    }, [item])


    // form validation
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

        await updateDatabaseImages(item?.id, images)
        setImages(await getDatabaseImages(item))
    }

    return (
        <div>
        <h2>Item Images</h2>
        <form onSubmit={(e) => updateItem(e)}>
            <Label><strong>Images*</strong></Label>
            
            <div className={styles.imagesContainer}>
            {images.map((image, k) => {
                if (image.deleted) {
                    return
                }
                return (
                    <div key={k} className={styles.imageAltWrapper}>
                        <div>
                        <DeletableImage
                            className={styles.image}
                            imageUrl={image.url}
                            altText={'Image '+k}
                            deleteFunction={() => {setImages(deleteLocalImage(image, images))}}
                        />
                        </div>
                        
                        <div className={styles.altTextWrapper}>
                            <Input
                                ariaLabel={'Alt text for image ' + {k}}
                                class={styles.altText}
                                type='textarea'
                                placeholder="alt text"
                                defaultValue={image.alt}
                                onChange={(data) => 
                                    // updates the alt text
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
                                    }))
                                }
                            />
                        </div>
                    </div>
                )
            })}
            <Input
                ariaLabel='Upload new image'
                className={styles.fileInput}
                type='file'
                accept="image/png, image/jpeg, image/jpg"
                onChange={(data) => setImages(images => [ ...images, getLocalImage(data)])}
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

