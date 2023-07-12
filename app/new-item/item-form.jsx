'use client'

// the form to create a new item
// Info needed: name, photos, description, price, quantity, expiration_date, key_words, shop_id

// TODO: limit number of images added, functionality to delete images

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { redirect } from "next/navigation";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';


export default function ItemForm({ session }) {
    const supabase = createClientComponentClient()
    const user = session?.user

    const [loading, setLoading] = useState(true);
    const [shops, setShops] = useState([]);
    const [shopId, setShopId] = useState();
    const [itemId, setId] = useState();
    const [itemName, setName] = useState();
    const [itemDescription, setDescription] = useState();
    const [itemPrice, setPrice] = useState();
    const [itemQuantity, setQuantity] = useState();
    const [keywords, setKeywords] = useState([]);

    const [images, setImages] = useState([]);

    const [imageUrls, setImageUrls] = useState([]);

    const [formError, setFormError] = useState(null);


    // get all of the seller's shops
    useEffect(() => {
        async function getShops() {
            setLoading(true);
            let { data, error } = await supabase
                .from('shops')
                .select('id, name')
                .eq('owner_id', user?.id)
            if (error) {
                console.warn(error);
            } else if (data) {
                setShops(data);
            }
            setLoading(false);
        }

        getShops();
    }, [])

    async function getImage(e) {
        let file = e.target.files[0];
        if (file) {
            setImages(arr => [ ...arr, file]);
        }
    }

    // adds a new row to the "items" table with the new item info (except the image urls)
    const createItem = async (e) => {
        e.preventDefault();
        if (shops.length == 0)  { setFormError("You must create a shop before adding an item.");  return; }
        if (!shopId)            { setFormError('You must select a shop or create a new one.');    return; }
        if (!itemName)          { setFormError('You must add a name for your item.');             return; }
        if (!itemDescription)   { setFormError('You must give a description of your item.');      return; }
        if (!itemPrice)         { setFormError('Your item must have a price.');                   return; }
        if (!itemQuantity)      { setFormError('You must provide a quantity for your item.');     return; }
        if (images.length == 0) { setFormError('You must add at least one image of your item. '); return; }
        
        // reset imageUrls
        setImageUrls([]);

        // put the item in the database
        const { data, error } = await supabase
            .from('items')
            .insert([{
                shop_id: shopId,
                name: itemName,
                description: itemDescription,
                price: itemPrice,
                quantity: itemQuantity,
                keywords: keywords
            }]).select()

        if (error) {
            setFormError(error.message)
            return;
        }
        if (data) {
            setId(data[0].id)
        }
    }
    // itemId is set after the item has been added to the database via createItem.
    useEffect (() => {

        // uploads the image to supabase storage and adds the image's public url to imageUrls[]
        async function uploadImage(image, itemId) {
            const imageId = uuidv4();

            const { data, error } = await supabase
                    .storage
                    .from('item-photos')
                    .upload(itemId + '/' + imageId, image)
            if (error) {
                setFormError(error.message)
                return
            }
            if (data) {
                addImageUrl(data.path);
            }
        }

        async function addImageUrl(path) {
            // Add the image url to the item
            const { data } = supabase
                .storage
                .from('item-photos')
                .getPublicUrl(path)
            if (data) {
                setImageUrls( arr => [ ...arr, data.publicUrl])
            }
        }

        async function uploadImages() {
            // upload the images to supabase storage
            await images.forEach(async image => {
                await uploadImage(image, itemId)
            })

        }
        
        if (!itemId || imageUrls.length > 0) return;
        // upload the images to item-photos bucket under folder [itemId]
        uploadImages();
        
    }, [itemId])

    // when all the image urls have been created (as uploadImages runs), add them to the items table
    useEffect(() => {

        async function updateItemImageUrls() {
            // set the imageUrls
            const { data, error } = await supabase
                .from('items')
                .update({ image_urls: imageUrls })
                .eq('id', itemId)
                .select()
            

            if(error) {
                console.warn(error)
            }
            if (data) {
            }
        }

        if (imageUrls.length !== images.length) return;
        if (imageUrls.length == 0) return;
        updateItemImageUrls();

        // redirect to the new item
        redirect('items/' + itemId.toString(), 'push');
    }, [imageUrls])

    return (
        <form onSubmit={createItem}>
            <select 
                name='shops' 
                onChange={(e)=> { setShopId(e.target.value)}}
            >
                <option value={''}>--Select--</option>
                {
                    shops.map(shop => {
                        return(
                            <option key={shop.id} value={shop.id}>{shop.name}</option>
                        )   
                    })
                }
            </select>
            <input
                type='text'
                placeholder='Item Name'
                onChange={(e)=>{
                    setName(e.target.value);
                }}
            />
            <input
                type='text'
                placeholder='Description'
                onChange={(e) => {
                    setDescription(e.target.value);
                }}
            />
            <input
                type='number'
                min='0.01'
                step='0.01'
                placeholder='Price'
                onChange={(e) => {
                    setPrice(e.target.value);
                }}
            />
            <input
                type='number'
                min='1'
                placeholder='Item Quantity'
                onChange={(e) => {
                    setQuantity(e.target.value);
                }}
            />
            <br/>
            <label>Type keywords in the box below. Separate each keyword by hitting 'enter' and starting a new line.</label>
            <textarea
                type='text'
                placeholder='keywords'
                onChange={(e) => {
                    setKeywords((e.target.value).split('\n').filter(keyword => keyword.match('[A-Za-z]'))); //keywords must contain letters
                }}
            />
            <p>Your keywords: 
                {keywords.map(keyword => {
                    return(
                        <>
                        {keyword},
                        </>
                    )
                })}
            </p>

            <br/>
            <input type="file" accept="image/png, image/jpeg, image/jpg" onChange={(e) => getImage(e)} />
            {
                images.map(image => {
                    return(
                        <div>
                            <img src={URL.createObjectURL(image)} width='100px'/>                            
                        </div>
                    )        
                })
            }

            <button disabled={loading}>Add</button>
            {formError && <p>{formError}</p>}
        </form>
    )
}   