'use client'
import { useState, useEffect } from "react"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { redirect } from "next/navigation";

export default function Page({params}) {
    const [item, setItem] = useState();
    const supabase = createClientComponentClient()

    // function to find the item id and make sure the item exists
    async function getItem() {
        let { data, error } = await supabase
            .from('items')
            .select()
            .eq('id', params.id)
            .single()
        if (error) {
            console.warn(error)
            setItem(null) // assuming the item doesn't exist
            redirect('/') // redirect to home if the item doesn't exist
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
                    <img key={url} src={url} width='200px'></img>
                )
            })}
        </> }
        
        </>
    )
}