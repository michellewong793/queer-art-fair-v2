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
import DetailEditForm from './DetailEditForm'
import ImageEditForm from './ImageEditForm'
import DeleteForm from './DeleteForm'

export default async function Page( {params} ) {
    const supabase = createServerComponentClient({ cookies })

    const {
        data: { session },
    } = await supabase.auth.getSession()

    const user = session?.user
    
    // function to retrieve the item and all its data
    async function getItem() {
        let { data, error } = await supabase
            .from('items')
            .select()
            .eq('id', params?.id)
            .single()
        if (error) {
            return
        }
        else if (data) {
            return data;
        }
    }

    const item = await getItem();

    // function to check who owns the shop the item is from, and if it's the same person that's currently logged in. If not, the user is redirected from this page.
    async function verifyShopowner() {
        if (!item) return;

        let { data, error } = await supabase
            .from('shops')
            .select('owner_id')
            .eq('id', item.shop_id)
            .single()
        
        if (error || (data && data.owner_id !== user?.id)) {
            redirect('/items/'+item.id)
        }
        else {
            return true;
        }
    }

    const verifiedShopowner = await verifyShopowner();
    
    return (
        <div style={theme.body} className={styles.background}>
            <HeaderDecoration />
            <Logo />
            <Subheader />
            <Navigation />
            <div className={styles.content}>
                {item && 
                <>
                    <DetailEditForm item={item}/>
                    <ImageEditForm item={item}/>
                    <DeleteForm item={item}/>
                </>}
            </div>
            <Footer />
        </div>
    )
    
} 