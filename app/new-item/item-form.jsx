'use client'

// the form to create a new item
// Info needed: updated_at, name, photos, description, price, quantity, expiration_date, key_words, shop_id

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useState, useEffect } from "react";

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
            console.log(data)
        }
    }

    useEffect(() => {
        getShops();
    }, [])

    // how the item is created and saved to the database
    const createItem = async (e) => {
        e.preventDefault();
        if (!shopId || !itemName || !itemDescription || !itemPrice || !itemQuantity) {
            setFormError('Please fill in all required fields');
            return;
        }

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
            console.warn(error)
            setFormError('Error! We could not save this item.')
        }
        if (data) {
            setFormError(null);
        }
    }

    return (
        <>
        <form onSubmit={createItem}>
            <select 
                name='shops' 
                onChange={(e)=> { setShopId(e.target.value)}}
            >
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
                type='number' // TODO: make this numeric, ensure it's a valid price
                placeholder='Price'
                onChange={(e) => {
                    setPrice(e.target.value);
                }}
            />
            <input
                type='number'
                min='0.01'
                step='0.01'
                placeholder='Item Quantity'
                onChange={(e) => {
                    setQuantity(e.target.value);
                }}
            />
            <button>Add</button>

            {formError && <p>{formError}</p>}
        </form>
        </>
    )
}   