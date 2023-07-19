'use client'

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation";
import { ImageManager } from "./image-manager";

export default function ItemEditForm( props ) {
    const supabase = createClientComponentClient()
    const user = props.session?.user
    const router = useRouter();

    const [shopId, setShopId] = useState()
    const [name, setName] = useState()
    const [description, setDescription] = useState()
    const [price, setPrice] = useState()
    // TODO: how to deal with quantity without screwing up orders in progress
    const [quantity, setQuantity] = useState()
    const [keywords, setKeywords] = useState([])
     // TODO: still need to deal with images
    const [formError, setFormError] = useState()
    const [verifiedShopowner, setVerifiedShopowner] = useState(false)
    
    // function to retrieve the item and all its data
    const getItem = async() => {
        let { data, error } = await supabase
            .from('items')
            .select()
            .eq('id', props.params?.id)
            .single()
        if (error) {
            console.warn(error)
            return
        }
        else if (data) {
            setShopId(data.shop_id)
            setName(data.name)
            setDescription(data.description)
            setPrice(data.price)
            setQuantity(data.quantity)
            setKeywords(data.keywords)
        }
    }

    // function to check who owns the shop the item is from, and if it's the same person that's currently logged in. If not, the user is redirected from this page.
    const checkShopowner = async() => {
        let { data, error } = await supabase
            .from('shops')
            .select('owner_id')
            .eq('id', shopId)
            .single()
        
        if (error || (data && data.owner_id !== user?.id)) {
            router.replace('/items/'+props.params.id)
        } 
        else if (data) {
            setVerifiedShopowner(true)
        }
    }

    // what happens when we can't update the item
    async function updateItem(e) {
        e.preventDefault()
        if (!name) { setFormError("Your item must have a name."); return; }
        else if (!description) { setFormError("Your item must have a description."); return; }
        else if (!price) { setFormError("Your item must have a price."); return; }
        else if (!quantity) { setFormError("Your item must have a quantity"); return; }

        let { error } = await supabase
            .from('items')
            .update({
                name: name,
                description: description,
                price: price,
                quantity: quantity,
                keywords: keywords
            })
            .eq('id', props.params.id)
        
        if (error) {
            setFormError("Your item could not be updated. Error: ", error.message)
        } else {
            router.push('/items/'+props.params.id)
        }
    }

    // retrieve the item (including its shop id)
    useEffect(() => {
        getItem()
    }, [])

    // once we know what the shop id is, check who the shopowner is
    useEffect(() => {
        if (shopId) checkShopowner()
    }, [shopId])

    return (
        <>
        {verifiedShopowner ?
            <>
            <form onSubmit={(e) => updateItem(e)}>
                <label>Name: </label>
                <input
                    type="text"
                    value={name || ''}
                    onChange={(e) => setName(e.target.value)}
                />

                <label>Description: </label>
                <input
                    type="text"
                    value={description || ''}
                    onChange={(e) => setDescription(e.target.value)}
                />

                <label>Price: </label>
                <input
                    type='number'
                    min='0.01'
                    step='0.01'
                    value={price || ''}
                    onChange={(e) => {
                        setPrice(e.target.value);
                    }}
                />
                <label>Quantity: </label>
                <input
                    type='number'
                    min='1'
                    value={quantity}
                    placeholder='Item Quantity'
                    onChange={(e) => {
                        setQuantity(e.target.value);
                    }}
                />

                <label>Keywords: </label>
                <textarea
                    type='text'
                    defaultValue={keywords.join(', ')}
                    onChange={(e) => {
                        setKeywords((e.target.value).split(/[ \n]*,[ \n]*|[, ]*\n[, ]*/).filter(keyword => keyword.match('[A-Za-z]'))); //keywords must contain letters
                    }}
                />
                <p>Your keywords:{" "}
                    {keywords.map(keyword => {
                        return(
                            <>
                            <u>{keyword}</u>,{" "}
                            </>
                        )
                    })}
                </p>

                <button type="submit">Update</button>
                {formError && <p>{formError}</p>}
                
            </form> 
            <ImageManager itemId={props.params?.id} />
            
            </>: <div></div>
        }  
        </>

    )
}