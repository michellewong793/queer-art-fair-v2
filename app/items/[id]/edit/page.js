import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import ItemEditForm from './item-edit-form'
import AccountForm from '../../../account/account-form'

// need everything about the shop, put it in form fields, allow user to edit and submit updates
// initially, only dealing with shop stuff (not shop's items)
export default async function Page( {params} ) {
    const supabase = createServerComponentClient({ cookies })

    const {
        data: { session },
    } = await supabase.auth.getSession()
    
    
    return (
        <>
        <ItemEditForm params={params} session={session}/>
        </>
    )
    
}