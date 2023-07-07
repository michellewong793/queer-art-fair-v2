'use client'
import { useState, useEffect } from "react"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export default function Page({params}) {
    const [item, setItem] = useState();
    const supabase = createClientComponentClient()

    // function to find the shop id and make sure the shop exists
    async function getItem() {
        let { data, error } = await supabase
            .from('items')
            .select()
            .eq('id', params.id)
            .single()
        if (error) {
            console.warn(error)
            setItems(null) // assuming the shop doesn't exist
        } else if (data) {
            setItem(data)
        }
    }

    useEffect(() => {
        getItem();
    }, [params.id])

    return(
        <>
        { item && <>
            <h3>{item.name} - ${item.price}</h3>
            <p>{item.description}</p>

            {item.image_urls.map(url => {
                return (
                    <img src={url} width='200px'></img>
                )
            })}
        </> }
        
        </>
    )
}