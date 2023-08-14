import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import ShopEditForm from "./ShopEditForm";
import ProductEditSection from "./ProductEditSection"
import styles from "./page.module.css";
import theme from "../../../../components/Theme";
import { redirect } from "next/navigation";
import HeaderDecoration from "../../../../components/HeaderDecoration";
import Logo from "../../../../components/Logo";
import Subheader from "../../../../components/Subheader";
import Navigation from "../../../../components/Navigation";
import Footer from "../../../../components/Footer";

export const dynamic = 'force-dynamic'

export default async function Page( {params} ) {
    const supabase = createServerComponentClient({ cookies })

    const {
        data: { session },
    } = await supabase.auth.getSession()
    
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

    // get the items from the shop
    async function getItems() {
        if (!shop) return;
        let { data, error } = await supabase
            .from('items')
            .select()
            .eq('shop_id', shop?.id)
        
        if (error) {
            console.warn(error)
        } else if (data) {
            return data
        }
    }
    const items = await getItems()
    
    return (
        <div style={theme.body} className={styles.background}>
            <HeaderDecoration />
            <Logo />
            <Subheader />
            <Navigation />
            <div className={styles.content}>
                {shop && <ShopEditForm shop={shop}/>}
                {shop && <ProductEditSection items={items}/>}
            </div>
            <Footer />
        </div>
    )
    
}