import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import AccountForm from './AccountForm'
import HeaderDecoration from "../../components/HeaderDecoration";
import Logo from "../../components/Logo";
import Subheader from "../../components/Subheader";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { redirect } from 'next/navigation'
import styles from "./page.module.css";
import theme from '../../components/Theme';
import Label from '../components/forms/Label';
import Link from 'next/link';
import Input from '../components/forms/Input';


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
        .select('name, email')
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
                {/* <AccountForm profile={profile}/> */}
                <form className={styles.details}>
                  <h3>Account Details</h3>

                  <Label><strong>Email</strong></Label>
                  <p>{profile.email}</p>

                  <Label><strong>Name</strong></Label>
                  <p>{profile.name}</p>

                  <div className={styles.rightAlign}>
                    <Link href={''}>Edit Details</Link>
                  </div>
                </form>


                <div className={styles.shops}>
                  <h3>Your Shops</h3>
                  
                  {shops?.map((shop, k) => {
                    let urlName = shop.name.split(' ').join('_')
                    return (
                      <div 
                        key={k}
                        className={styles.shop}
                      >
                        <p>{shop.name}</p>
                        <div className={styles.shopLinks}>
                          <Link href={'/shops/'+urlName} target="_blank" rel="noopener noreferrer" >View</Link>
                          <Link href={'/shops/'+urlName+'/edit'} target="_blank" rel="noopener noreferrer" >Edit</Link>
                        </div>
                      </div>
                    )
                  })}

                  <div className={styles.rightAlign}>
                    <Link href='/shops/new'>New Shop</Link>
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