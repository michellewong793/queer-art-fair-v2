'use client'
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useEffect, useState } from "react";
import ItemCard from './ItemCard'
import Navigation from "../../../components/Navigation";
import Strawberry from "../../../components/Strawberry";
import Logo from "../../../components/Logo";
import Subheader from "../../../components/Subheader";
import HeaderDecoration from "../../../components/HeaderDecoration";
import Footer from "../../../components/Footer";
import styles from "./Page.module.css";
import theme from "../../../components/Theme";
import Handles from "./Handles"


// displays everything in one shop
export default function Page({params}) {
    const shopName = (params.shop).split('_').join(' ');
    const supabase = createClientComponentClient()
    const [items, setItems] = useState([])
    const [shop, setShop] = useState(null)

    // function to find the shop id and make sure the shop exists
    async function getShop() {
        let { data, error } = await supabase
            .from('shops')
            .select()
            .eq('name', shopName)
            .single()
        if (error) {
            console.warn(error)
            setItems(null) // assuming the shop doesn't exist
        } else if (data) {
            setShop(data)
        }
    }

    // function to find all the items in the shop based off the shop name (which should be unique) - uses foreign key relation
    async function getItems() {
        await getShop()

        if (!shop) return;

        let { data, error } = await supabase
            .from('items')
            .select()
            .eq('shop_id', shop?.id)
        
        if (error) {
            console.warn(error)
        } else if (data) {
            setItems(data)
        }
    }

    useEffect(() => {
        getItems();
    }, [shop])

    return(
        <div style={theme.body} className={styles.background}>
        <HeaderDecoration/>
        <Logo />
        <Subheader />
        <Navigation />
        <div className={styles.content}>
            <h3>{shopName} </h3>
            <p className={styles.description}>{shop?.description}</p>
            <Handles props={shop}/>

            <div className = {styles.productsContainer}>
                <h3>Products</h3>
                <div className = {styles.products}>
                    {items ? items.map((item) => (
                        <ItemCard item={item}/>
                    )) : 
                    <p>Sorry, we can't find this shop in our database.</p>}
                </div>
            </div>
        </div>
        
        <Footer/>
        </div>
    )
}