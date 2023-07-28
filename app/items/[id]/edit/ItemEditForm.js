'use client'

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation";
import { ImageManager } from "./ImageManager";

export default function ItemEditForm( props ) {
    const item = props?.item
    const supabase = createClientComponentClient()
    const router = useRouter();

    const [name, setName] = useState(item?.name)
    const [description, setDescription] = useState(item?.description)
    const [price, setPrice] = useState(item?.price)
    // TODO: how to deal with quantity without screwing up orders in progress
    const [quantity, setQuantity] = useState(item?.quantity)
    const [keywords, setKeywords] = useState(item?.keywords)
     // TODO: still need to deal with images
    const [formError, setFormError] = useState()

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
            .eq('id', item?.id)
        
        if (error) {
            setFormError("Your item could not be updated. Error: ", error.message)
        } else {
            router.push('/items/'+item?.id)
        }
    }

    return (
        <>
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
            
            </>
        </>

    )
}