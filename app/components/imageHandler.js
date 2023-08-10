'use client'

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { v4 as uuidv4 } from 'uuid';

const supabase = createClientComponentClient()

/*images = [
    {
        name: uuid,
        uploaded: true/false,
        deleted: true/false,
        file: file/null,
        url: publicUrl or localUrl,
        alt: string
    },
    {
        ...
    }
]*/

// use this to process an image that has been uploaded locally. (Set your image to the output)
export function getLocalImage(data) {
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
        return image
    }
}

// use this to locally delete an image. (Set your images array to the output)
export function deleteLocalImage(imageToDelete, images) {
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
    return updatedImages
}

// finds an uploaded images alt text based on its url
export function findAltFromUrl(url, item) {
    if (!item) return
    let index = item?.image_urls.indexOf(url)

    if (index < item?.alt_text.length) return item?.alt_text[index]

    return ''
}

// gets all of the images for an item from the database and returns them as objects with their associated info
export async function getDatabaseImages(item) {
    const { data, error } = await supabase
        .storage
        .from('item-photos')
        .list(item?.id + '/')
    if (error) {
        alert(error.message)
        return []
    }

    let imageNames = data
    let images = []

    for (let i = 0; i < imageNames.length; i++) {
        let name = imageNames[i].name
        const { data } = await supabase
            .storage
            .from('item-photos')
            .getPublicUrl(item?.id+'/'+name)
        
        let image = {
            name: name,
            uploaded: true,
            deleted: false,
            file: null,
            url: data?.publicUrl,
            alt: findAltFromUrl(data?.publicUrl, item)
        }

        images.push(image)
    }

    return images
}

// given an item id and the images associated with it (images as an array of objects containing image data), 
// this updates the stored images along with the item's image_urls and alt_text arrays
export async function updateDatabaseImages(itemId, images) {
    let publicUrls = []
    let altText = []

    // upload new images to images bucket + delete deleted images
    for (let image of images) {
        // if the image has been uploaded to the database, but the shopowner has deleted it
        if (image.uploaded && image.deleted) { 
            await deleteDatabaseImage(itemId, image.name)
        }
        // if the image hasn't been uploaded, and hasn't been deleted
        else if (!image.uploaded && !image.deleted) {
            image.url = await uploadDatabaseImage(itemId, image);
            if (image.url) image.uploaded = true;
        }
        
        // update the public urls and alt text array
        publicUrls.push(image.url)
        altText.push(image.alt)
    }

    // update item image_urls and alt text
    await supabase
        .from('items')
        .update ({
            image_urls: publicUrls,
            alt_text: altText
        })
        .eq('id', itemId)
    
    alert('Successfully uploaded images')
}

// given the item id and the name of an image, this function removes the image from the database
export async function deleteDatabaseImage(itemId, imageName) {
    const { data, error } = await supabase
        .storage
        .from('item-photos')
        .remove(itemId + '/' + imageName)
    
    if (error) {
        alert(error.message)
    }
}

// returns the uploaded image's url
export async function uploadDatabaseImage(itemId, image) {
    const { data, error } = await supabase
        .storage
        .from('item-photos')
        .upload(itemId + '/' + image.name, image.file)
    if (error) {
        alert(error.message)
    }
    else if (data) {
        const {data} = await supabase
            .storage
            .from('item-photos')
            .getPublicUrl(itemId+'/'+image.name)
        
        if (data) return data.publicUrl
    }
}