import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import AccountForm from './account-form'
import Navigation from '../../components/Navigation'
import Strawberry from '../../components/Strawberry'
import Logo from '../../components/Logo'

export default async function Account() {
  const supabase = createServerComponentClient({ cookies })

  const {
    data: { session },
  } = await supabase.auth.getSession()

  return <>
    <Logo/>
    <Navigation/>
    <Strawberry heading='YOUR ACCOUNT' showLargeStrawberry='none'/>
    < AccountForm session={session} />

    </>
}