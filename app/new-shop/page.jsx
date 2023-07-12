import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import ShopForm from './shop-form'

export default async function Page() {
    const supabase = createServerComponentClient({ cookies })

    const { data: { session }, } = await supabase.auth.getSession()

    return (
        <ShopForm session={session}/>
    )
}