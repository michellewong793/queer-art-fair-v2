'use client'
import { useState, useEffect } from "react";
import { redirect } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export default function ShopEditForm({ params }, { session }) {
    const user = session?.user
    // redirects non-authenticated users so they can't edit a shop
    if (!user) redirect('/shops/'+params.shop)

    const supabase = createClientComponentClient()
    const [name, setName] = useState()
    const [description, setDescription] = useState()
    const [instagram, setInstagram] = useState()
    const [venmo, setVenmo] = useState()
    const [id, setId] = useState();
    const [formError, setFormError] = useState()
    const [updated, setUpdated] = useState(false);

    useEffect(() => {
        async function getShop() {
            const shopName = (params.shop).split('_').join(' ')
            let { data, error } = await supabase
                .from('shops')
                .select()
                .eq('name', shopName)
                .single()
            
            if (error) {
                console.warn(error)
                return
            }
            if (data) {
                // redirects users if it turns out they aren't the shop owner
                if (!user.id == data.owner_id) redirect('/shops/'+params.shop);

                setId(data.id)
                setName(data.name)
                setDescription(data.description)
                setInstagram(data.instagram)
                setVenmo(data.venmo)
            }
        }
        getShop()
    }, [])

    async function updateShop(e) {
        e.preventDefault()
        if (!name) { setFormError("Your shop must have a unique name."); return; }
        else if (!description) { setFormError("Your shop must have a description."); return; }
        else if (!venmo) { setFormError("Your shop must have a venmo setup so you can receive payments."); return; }
        else { setFormError(null) }

        let { error } = await supabase
            .from('shops')
            .update({
                name: name,
                description: description,
                instagram: instagram,
                venmo: venmo
            })
            .eq('id', id)
        
        if (error) {
            setFormError("Your shop could not be updated. Error: ", error.message)
        } else {
            setUpdated(true);
        }
    }

    useEffect(() => {
        if (updated) {
            redirect('/shops/'+name.split(' ').join('_'))
        }
    }, [updated])

    return (
        <>
        <form onSubmit={(e) => updateShop(e)}>
            <label>Name: </label>
            <input
                type="text"
                value={name || ''}
                onChange={(e) => setName(e.target.value)}
            />

            <label>Description: </label>
            <textarea
                type="text"
                value={description || ''}
                onChange={(e) => setDescription(e.target.value)}
            />

            <label>Instagram: </label>
            <input
                type="text"
                value={instagram || ''}
                onChange={(e) => setInstagram(e.target.value)}
            />

            <label>Venmo: </label>
            <input
                type="text"
                value={venmo || ''}
                onChange={(e) => setVenmo(e.target.value)}
            />

            <button type="submit">Update</button>
        </form>

        {formError && <p>{formError}</p>}
        </>
    )
}