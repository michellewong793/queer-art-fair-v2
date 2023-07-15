'use client'
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

// props: itemId
// keep track of images to delete instead of directly deleting?
export function ImageManager(props) {

    const supabase = createClientComponentClient();
    const [images, setImages] = useState([])
    
    async function getDatabaseImages(props) {
        let imageNames;

        const { data, error } = await supabase
            .storage
            .from('item-photos')
            .list(props.itemId + '/')
        if (error) {
            console.warn (error)
            return;
        }
        imageNames = data;
        
        for(let i = 0; i < imageNames.length; i ++){ 
            let name = imageNames[i].name
            const { data } = await supabase
                .storage
                .from('item-photos')
                .getPublicUrl(props.itemId+'/'+name)
            let image = {
                name: imageNames[i].name,
                uploaded: true,
                file: null,
                url: data?.publicUrl,
                order: i,
            }
            setImages(images => [...images, image])
        }
    }

    async function getUploadedImage(e) {
        let file = e.target.files[0];
        if (file) {
            let url = URL.createObjectURL(file)
            let image = {
                name: uuidv4(),
                uploaded: false,
                file: file,
                url: url,
                order: images.length
            }
            setImages(images => [ ...images, image]);
        }
    }

    async function uploadImagesToDatabase() {
        console.log('hello')
        // keep track of the public urls
        let publicUrls = []
        console.log('There are ', images.length, ' images to upload')
        // upload the images
        for (let image of images) {
            console.log('image!')
            if (!image.uploaded) {
                const { data, error } = await supabase
                    .storage
                    .from('item-photos')
                    .upload(props.itemId + '/' + image.name, image.file)
                if (error) {
                    console.warn(error.message)
                    return
                }
                else if (data) {
                    // get the public url
                    const {data} = await supabase
                        .storage
                        .from('item-photos')
                        .getPublicUrl(props.itemId+'/'+image.name)
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
            .eq('id', props.itemId)
        
        if (error) console.warn(error)

    }

    useEffect(() => {
        getDatabaseImages({itemId: props.itemId})
    }, [props.itemId])

    return (
        <>
        <h3>Images</h3>
        {images.map(image => {
            return (
                <div key={image?.name}>
                    <img src={image?.url} width='300px'></img>
                </div >
                
            )
        })}

        <input type="file" accept="image/png, image/jpeg, image/jpg" onChange={(e) => getUploadedImage(e)} />

        <button onClick={() => uploadImagesToDatabase()}>Save changes to images</button>

        </>
    )
}

