'use client'
import { useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Input from "./input";
import styles from "./ShopForm.module.css";
import { useRouter } from "next/navigation";
// the form to create a new shop
// Info needed: owner_id, name, description, items (just initialize the array)

export default function ShopForm({ session }) {
    const router = useRouter()

    const supabase = createClientComponentClient()
    const user = session?.user
    const ownerId = user?.id

    const [shopName, setShopName] = useState();
    const [shopDescription, setDescription] = useState();
    const [instagram, setInstagram] = useState();
    const [venmo, setVenmo] = useState();
    const [formError, setFormError] = useState();
    
    const createShop = async(e) => {
        e.preventDefault()
        
        // prevent form submission if any of these aren't filled out
        if (!ownerId) {
            setFormError('You must be logged in to create a shop.')
            return
        }
        else if (!shopName || shopName==='new') { // can't allow shops with the name 'new'
            setFormError('You must give your shop a unique name.')
            return
        }
        else if (!shopDescription) {
            setFormError('You must give your shop a description.')
            return
        }

        else if (!venmo) {
            setFormError('You must add your venmo handle so your customers can pay you.')
            return;
        }

        // insert new shop
        const { data, error } = await supabase
            .from('shops')
            .insert([{
                owner_id: ownerId,
                name: shopName,
                description: shopDescription,
                instagram: instagram,
                venmo: venmo,
            }])
            .select()
        
        if (error) {
            console.warn(error)
            setFormError('Error! We could not save your shop.')
        }
        if (data) {
            setFormError(null)
            console.log(shopName)
            let url = '/shops/'+shopName.split(' ').join('_')
            router.replace(url)
        }
    }

    return (
        <form onSubmit={createShop}>
            <Input
                type='text'
                placeholder='Shop name'
                className={styles.input}
                onChange={(data) => { setShopName(data.value)}}
            />

            <Input
                type='textarea'
                placeholder='Shop description'
                onChange={(data) => { setDescription(data.value)}}
            />

            <Input
                type='text'
                placeholder='Instagram handle'
                onChange={(data) => { setInstagram(data.value)}}
            />

            <Input
                type='text'
                placeholder='Venmo handle'
                onChange={(data) => { setVenmo(data.value)}}
            />  

            <Input
                type='submit'
                value='Create shop'
            />
            {formError && <p>{formError}</p>}
        </form>
    )
}