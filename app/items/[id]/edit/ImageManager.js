'use client'
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

// props: itemId
// keep track of images to delete instead of directly deleting?
export function ImageManager(props) {

    const supabase = createClientComponentClient();
    const [images, setImages] = useState([])
    const [saved, setSaved] = useState(true)
    
    async function getDatabaseImages(itemId) {
        let imageNames;

        const { data, error } = await supabase
            .storage
            .from('item-photos')
            .list(itemId + '/')
        if (error) {
            console.warn (error)
            return;
        }
        imageNames = data;
        
        let databaseImages = []
        for(let i = 0; i < imageNames.length; i ++){ 
            let name = imageNames[i].name
            const { data } = await supabase
                .storage
                .from('item-photos')
                .getPublicUrl(itemId+'/'+name)
            let image = {
                name: imageNames[i].name,
                uploaded: true,
                deleted: false,
                file: null,
                url: data?.publicUrl,
                // TODO: implement order somehow
            }
            databaseImages.push(image)
        }
        setImages(databaseImages)
    }

    async function getLocalImage(e) {
        let file = e.target.files[0];
        if (file) {
            let url = URL.createObjectURL(file)
            let image = {
                name: uuidv4(),
                uploaded: false,
                deleted: false,
                file: file,
                url: url,
            }
            setImages(images => [ ...images, image]);
            setSaved(false)
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
                }
            } else {
                return image
            }
        })

        setImages(updatedImages);
        setSaved(false)
    }

    async function uploadImagesToDatabase() {
        // keep track of the public urls
        let publicUrls = []
        // upload the images
        for (let image of images) {

            // if the image has been uploaded to the database, but the shopowner has deleted it
            if (image.uploaded && image.deleted) {
                const { data, error } = await supabase
                    .storage
                    .from('item-photos')
                    .remove(props?.itemId+'/'+image.name)
                
                if (error) console.warn(error.message)
                continue
            }

            // if the image hasn't been uploaded, and hasn't been deleted
            if (!image.uploaded && !image.deleted) {
                const { data, error } = await supabase
                    .storage
                    .from('item-photos')
                    .upload(props?.itemId + '/' + image.name, image.file)
                if (error) {
                    console.warn(error.message)
                    return
                }
                else if (data) {
                    // get the public url
                    const {data} = await supabase
                        .storage
                        .from('item-photos')
                        .getPublicUrl(props?.itemId+'/'+image.name)
                    if (data) image.url = data.publicUrl
                }

            }
            publicUrls.push(image.url)
        }

        // create the new url array
        // replace the old public urls with the new ones
        const { error } = await supabase
            .from('items')
            .update({ image_urls: publicUrls })
            .eq('id', props?.itemId)
        
        if (error) {console.warn(error); return; }

        setSaved(true)

        await getDatabaseImages(props?.itemId)
    }

    useEffect(() => {
        getDatabaseImages(props?.itemId)
    }, [props?.itemId])

    return (
        <>
        <h3>Images</h3>
        {images.map(image => {
            if (image.deleted) {
                return
            }
            return (
                <div key={image.name}>
                    <img src={image?.url} width='300px'></img>
                    <button onClick={() => localDeleteImage(image)}>Delete</button>
                </div >  
            )
        })}

        <input type="file" accept="image/png, image/jpeg, image/jpg" onChange={(e) => getLocalImage(e)} />

        <button disabled={saved} onClick={() => uploadImagesToDatabase()}>Save changes to images</button>
        </>
    )
}

