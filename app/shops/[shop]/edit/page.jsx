import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import ShopEditForm from './shop-edit-form'

// need everything about the shop, put it in form fields, allow user to edit and submit updates
// initially, only dealing with shop stuff (not shop's items)
export default async function Page( {params} ) {
    const supabaseServer = createServerComponentClient({ cookies })
    const {
        data: { session },
    } = await supabaseServer.auth.getSession()

    return (
        <ShopEditForm params={params} session={session}/>
    )
    
}