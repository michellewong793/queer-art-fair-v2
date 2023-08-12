import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import AccountEditForm from './AccountEditForm'
import HeaderDecoration from "../../components/HeaderDecoration";
import Logo from "../../components/Logo";
import Subheader from "../../components/Subheader";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { redirect } from 'next/navigation'
import styles from "./page.module.css";
import theme from '../../components/Theme';
import Link from 'next/link';
import ShopCard from './ShopCard'
import NewCard from '../components/NewCard';
import Input from '../components/forms/input';


export default async function Account() {
  const supabase = createServerComponentClient({ cookies })

  const {
    data: { session },
  } = await supabase.auth.getSession()

  const user = session?.user


  async function getProfile() {
    try {
      let { data, error, status } = await supabase
        .from('profiles')
        .select()
        .eq('id', user?.id)
        .single()
      
      if (error /*&& status !== 406*/) throw error;
      if (data) {
        return data
      }
    } catch (error) {
      redirect('/login')
    }
  }

  const profile = await getProfile()

  async function getShops() {
    
    if (!user) return;

    let { data, error } = await supabase
      .from('shops')
      .select()
      .eq('owner_id', user?.id)

      if (error) {
      // todo: notification?
      console.warn(error.message)
      return []
    }
    else if (data) {
      return data
    }
  }

  const shops = await getShops()

  return (
    <div style={theme.body} className={styles.background}>
        <HeaderDecoration />
        <Logo />
        <Subheader />
        <Navigation />
        <div className={styles.content}>
            {profile && 
            <>
                
                <div className={styles.details}>
                  
                  <AccountEditForm profile={profile}/>
                </div>


                <div className={styles.shopSection}>
                  <h2>Your Shops</h2>

                  <div className={styles.shops}>
                    <Link href='./shops/new' target="_blank" rel="noopener noreferrer">
                      <NewCard/>
                    </Link>
                    
                    {shops?.map((shop, k) => (
                      <ShopCard shop={shop} />
                    ))}
                  </div>

                </div>

                <div>
                  <form action="/auth/signout" method="post">
                    <Input value='Logout' type="submit"/>
                  </form>
                </div>
            </>}
        </div>
        <Footer />
    </div>
)
}