// the form to add a new item

import ItemForm from './item-form'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

export default async function Page() {
    const supabase = createClientComponentClient({ cookies })

    const { data: { session }, } = await supabase.auth.getSession()
    console.log('cookies: ', { cookies })
    console.log('session: ', session)
    console.log('user: ', session?.user)

    return (
        <ItemForm session={session}/>
    )
}