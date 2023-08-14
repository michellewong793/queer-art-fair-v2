import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import styles from "./page.module.css";
import theme from "../../../components/Theme";
import Navigation from "../../../components/Navigation";
import Logo from "../../../components/Logo";
import Subheader from "../../../components/Subheader";
import HeaderDecoration from "../../../components/HeaderDecoration";
import Footer from "../../../components/Footer";
import ItemDisplay from "./ItemDisplay"
import { redirect } from 'next/navigation';

export const dynamic = 'force-dynamic'

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

    async function getShopowner() {
        if (!shop) return;

        const { data, error } = await supabase
            .from('profiles')
            .select()
            .eq('id', shop.owner_id)
            .single()
        if (error) {
            console.warn(error)
            return
        } else if (data) {
            return data
        }
    }

    const shopOwner = await getShopowner()

    return(
        <div style={theme.body} className={styles.background}>
        <HeaderDecoration/>
        <Logo />
        <Subheader />
        <Navigation />
        <div className={styles.content}>
            {item ? 
            <ItemDisplay item={item} shop={shop} shopOwner={shopOwner}/>
            :
            <p>Sorry, we couldn't find this item.</p>}
        </div>
        
        <Footer/>
        </div>
    )
}