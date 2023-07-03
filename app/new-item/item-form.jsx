'use client'

// the form to create a new item
// Info needed: updated_at, name, photos, description, price, quantity, expiration_date, key_words, shop_id

// TODO: limit number of images added, functionality to delete images

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';


export default function ItemForm({ session }) {
    const supabase = createClientComponentClient()
    const user = session?.user

    const [loading, setLoading] = useState(true);
    const [shops, setShops] = useState([]);
    const [shopId, setShopId] = useState();
    const [itemName, setName] = useState();
    const [itemDescription, setDescription] = useState();
    const [itemPrice, setPrice] = useState();
    const [itemQuantity, setQuantity] = useState();

    const [images, setImages] = useState([]);

    const [formError, setFormError] = useState(null);

    // get all of the seller's shops
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
    }

    useEffect(() => {
        getShops();
    }, [])

    async function getImage(e) {
        let file = e.target.files[0];
        if (file) {
            setImages([ ...images, file]);
        }
    }

    async function uploadImage(image, itemId) {
        const { data, error } = await supabase
                .storage
                .from('item-photos')
                .upload(itemId + '/' + uuidv4(), image)
        if (error) {
            setFormError(error.message)
        }
    }

    async function uploadImages(itemId) {
        await images.forEach(image => {
            uploadImage(image, itemId)
        })
    }
    // how the item is created and saved to the database
    const createItem = async (e) => {
        e.preventDefault();
        if (shops.length == 0) { setFormError("You must create a shop before adding an item."); return; }
        if (!shopId)           { setFormError('You must select a shop or create a new one.');   return; }
        if (!itemName)         { setFormError('You must add a name for your item.');            return; }
        if (!itemDescription)  { setFormError('You must give a description of your item.');     return; }
        if (!itemPrice)        { setFormError('Your item must have a price.');                  return; }
        if (!itemQuantity)     { setFormError('You must provide a quantity for your item.');    return; }
        
        const { data, error } = await supabase
            .from('items')
            .insert([{
                shop_id: shopId,
                name: itemName,
                description: itemDescription,
                price: itemPrice,
                quantity: itemQuantity
            }]).select()

        if (error) {
            setFormError(error.message)
            return;
        }
        if (data) {
            setFormError(null);
            uploadImages(data[0].id)
        }
    }

    return (
        <>
        <form onSubmit={createItem}>
            <select 
                name='shops' 
                onChange={(e)=> { setShopId(e.target.value) }}
            >
                <option value={''}>--Select--</option>
                {
                    shops.map(shop => {
                        return(
                            <option value={shop.id}>{shop.name}</option>
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
                placeholder='Item Quantity'
                onChange={(e) => {
                    setQuantity(e.target.value);
                }}
            />

            <input type="file" onChange={(e) => getImage(e)} />
            {
                images.map(image => {
                    return(
                        <div>
                            <img src={URL.createObjectURL(image)} width='100px'/>                            
                        </div>
                    )        
                })
            }

            <button>Add</button>

            {formError && <p>{formError}</p>}
        </form>
        </>
    )
}   