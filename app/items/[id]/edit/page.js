import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import styles from "./page.module.css";
import theme from "../../../../components/Theme";
import { redirect } from "next/navigation";
import HeaderDecoration from "../../../../components/HeaderDecoration";
import Logo from "../../../../components/Logo";
import Subheader from "../../../../components/Subheader";
import Navigation from "../../../../components/Navigation";
import Footer from "../../../../components/Footer";
import ItemEditForm from './ItemEditForm'

export default async function Page( {params} ) {
    const supabase = createServerComponentClient({ cookies })

    const {
        data: { session },
    } = await supabase.auth.getSession()
    
    
    return (
        <div style={theme.body} className={styles.background}>
            <HeaderDecoration />
            <Logo />
            <Subheader />
            <Navigation />
            <div className={styles.content}>
                <ItemEditForm params={params} session={session}/>
            </div>
            <Footer />
        </div>
    )
    
} 