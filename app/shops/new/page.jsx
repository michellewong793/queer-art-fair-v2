import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import styles from "./page.module.css";
import theme from "../../../components/Theme";
import Navigation from "../../../components/Navigation";
import Logo from "../../../components/Logo";
import Subheader from "../../../components/Subheader";
import HeaderDecoration from "../../../components/HeaderDecoration";
import Footer from "../../../components/Footer";
import ShopForm from './shop-form'

export default async function Page() {
    const supabase = createServerComponentClient({ cookies })

    const { data: { session }, } = await supabase.auth.getSession()

    return(
        <div style={theme.body} className={styles.background}>
        <HeaderDecoration/>
        <Logo />
        <Subheader />
        <Navigation />
        <div className={styles.content}>
            <h3>New Shop</h3>
            <ShopForm session={session}/>
        </div>
        
        <Footer/>
        </div>
    )
}