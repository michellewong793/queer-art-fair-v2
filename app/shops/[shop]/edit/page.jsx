import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import ShopEditForm from "./shop-edit-form";

export default async function Page( {params} ) {
    const supabase = createServerComponentClient({ cookies })

    const {
        data: { session },
    } = await supabase.auth.getSession()
    
    
    return (
        <>
        <ShopEditForm params={params} session={session}/>
        </>
    )
    
}