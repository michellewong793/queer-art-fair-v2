import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import ItemEditForm from './ItemEditForm'

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