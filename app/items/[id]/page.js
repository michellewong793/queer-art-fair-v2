import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import styles from "./page.module.css";
import theme from "../../../components/Theme";
import Navigation from "../../../components/Navigation";
import Logo from "../../../components/Logo";
import Subheader from "../../../components/Subheader";
import HeaderDecoration from "../../../components/HeaderDecoration";
import Footer from "../../../components/Footer";
import { redirect } from 'next/navigation';

export default async function Page({params}) {
    const supabase = createServerComponentClient({ cookies })

    async function getItem() {
        let { data, error } = await supabase
            .from('items')
            .select()
            .eq('id', params.id)
            .single()
        if (error) {
            console.warn(error)
            //redirect('/') // redirect to home if the item doesn't exist
            return null
        } else if (data) {
            return data
        }
    }

    const item = await getItem()

    async function getShop() {
        if (!item) return;

        let { data, error } = await supabase
            .from('shops')
            .select()
            .eq('id', item.shop_id)
            .single()
        if (error) {
            console.warn(error)
            return null
        } else if (data) {
            return data
        }
    }

    const shop = await getShop()

    return(
        <div style={theme.body} className={styles.background}>
        <HeaderDecoration/>
        <Logo />
        <Subheader />
        <Navigation />
        <div className={styles.content}>
            <h3>Item!</h3>
        </div>
        
        <Footer/>
        </div>
    )
}






// 'use client'
// import { useState, useEffect } from "react"
// import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
// import { redirect } from "next/navigation";
// import Link from "next/link";

// export default function Page({params}) {
//     const [item, setItem] = useState();
//     const [shopUrl, setShopUrl] = useState();
//     const [shopName, setShopName] = useState();
//     const supabase = createClientComponentClient()

//     // finds the item id and make sure the item exists
//     useEffect(() => {
//         async function getItem() {
//             let { data, error } = await supabase
//                 .from('items')
//                 .select()
//                 .eq('id', params.id)
//                 .single()
//             if (error) {
//                 console.warn(error)
//                 setItem(null) // assuming the item doesn't exist
//                 redirect('/') // redirect to home if the item doesn't exist
//             } else if (data) {
//                 setItem(data)
//             }
//         }

//         getItem();
//     }, [params.id])

//     // once we know the item exists, find the shop information
//     useEffect(() => {
//         async function getShopInfo() {
//             let { data, error } = await supabase
//                 .from('shops')
//                 .select()
//                 .eq('id', item.shop_id)
//                 .single()
            
//             if (error) {
//                 console.warn(error)
//             } else if (data) {
//                 setShopName(data.name)
//                 setShopUrl('/shops/'+data.name.split(' ').join('_'))
//             }
//         }

//         if (!item) return;
//         getShopInfo();
//     }, [item])

//     return(
//         <>
//         { item && <>
//             <h3>{item.name} - ${item.price}</h3>
//             {shopName && <p>Sold by <Link href={shopUrl}>{shopName}</Link></p>}
//             <p>{item.description}</p>

//             {item.image_urls.map(url => {
//                 return (
//                     <img key={url} src={url} width='200px'></img>
//                 )
//             })}
//         </> }
        
//         </>
//     )
// }