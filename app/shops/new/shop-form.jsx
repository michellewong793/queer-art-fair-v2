'use client'
import { useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
// the form to create a new shop
// Info needed: owner_id, name, description, items (just initialize the array)

export default function ShopForm({ session }) {
    const supabase = createClientComponentClient()
    const user = session?.user
    const ownerId = user?.id

    const [shopName, setShopName] = useState();
    const [shopDescription, setDescription] = useState();
    const [formError, setFormError] = useState();
    
    const createShop = async(e) => {
        e.preventDefault()
        
        // prevent form submission if any of these aren't filled out
        if (!ownerId) {
            setFormError('You must be logged in to create a shop.')
            return
        }
        else if (!shopName) {
            setFormError('You must give your shop a unique name.')
            return
        }
        else if (!shopDescription) {
            setFormError('You must give your shop a description.')
            return
        }

        // insert new shop
        const { data, error } = await supabase
            .from('shops')
            .insert([{
                owner_id: ownerId,
                name: shopName,
                description: shopDescription,
            }])
            .select()
        
        if (error) {
            console.warn(error)
            setFormError('Error! We could not save your shop.')
        }
        if (data) {
            setFormError(null)
        }
    }

    return (
        <form onSubmit={createShop}>
            <input
                type='text'
                placeholder='Shop name'
                onChange={(e) => { setShopName(e.target.value )}}
            />

            <textarea
                type='text'
                placeholder='Shop description'
                onChange={(e) => { setDescription(e.target.value )}}
            />

            <button>Save shop</button>
            {formError && <p>{formError}</p>}
        </form>
    )
}