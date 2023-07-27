// the form to add a new item

import ItemForm from './ItemForm'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import theme from "../../../../components/Theme";
import HeaderDecoration from '../../../../components/HeaderDecoration';
import Logo from "../../../../components/Logo";
import Subheader from "../../../../components/Subheader";
import Navigation from "../../../../components/Navigation";
import Footer from "../../../../components/Footer";
import styles from "./page.module.css"

export default async function Page({params}) {
    const supabase = createServerComponentClient({ cookies })

    const { data: { session }, } = await supabase.auth.getSession()

    const nameFromUrl = (params?.shop)?.split('_').join(' ')
    const user = session?.user

    // gets the shop and verifies that the user is the shopowner
    async function getShop() {
        let { data, error } = await supabase
            .from('shops')
            .select()
            .eq('name', nameFromUrl)
            .single()
        
        if (error) {
            console.warn(error)
            return
        }
        if (data && user?.id !== data.owner_id) {
            redirect('/shops/'+params.shop)
        }
        else if (data) {
            return data
        }
    }
    const shop = await getShop()

    return (
        <>
        <div style={theme.body} className={styles.background}>
            <HeaderDecoration />
            <Logo />
            <Subheader />
            <Navigation />
            <div className={styles.content}>
                {shop && <ItemForm shop={shop}/>}
            </div>
            <Footer />
        </div>
        </>
        
    )
}