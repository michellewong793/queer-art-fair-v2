'use client'

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation";

export default function ShopEditForm( props ) {
    const supabase = createClientComponentClient()
    const router = useRouter()

    const [name, setName] = useState()
    const [description, setDescription] = useState()
    const [instagram, setInstagram] = useState()
    const [venmo, setVenmo] = useState()
    const [id, setId] = useState()
    const [formError, setFormError] = useState()

    // set all of the state variables
    useEffect(() => {
        let shop = props?.shop
        setId(shop.id)
        setName(shop.name)
        setDescription(shop.description)
        setInstagram(shop.instagram)
        setVenmo(shop.venmo)
    }, [props?.shop])

    // how to update a shop
    async function updateShop(e) {
        e.preventDefault()
        if (!name) { setFormError("Your shop must have a unique name."); return; }
        else if (!description) { setFormError("Your shop must have a description."); return; }
        else if (!venmo) { setFormError("Your shop must have a venmo setup so you can receive payments."); return; }

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
            router.push('/shops/'+name.split(' ').join('_'))
        }
    }

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

                {formError && <p>{formError}</p>}
            </form>     
        </>
    )
}