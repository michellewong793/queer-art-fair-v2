'use client'
import { useState, useId } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Input from "../../components/forms/input";
import styles from "./ShopForm.module.css";
import { useRouter } from "next/navigation";
import Label from "../../components/forms/label";
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
    const [nameError, setNameError] = useState(null);
    const [descriptionError, setDescriptionError] = useState(null);
    const [venmoError, setVenmoError] = useState(null);

    const nameId = useId()
    const descriptionId = useId()
    const instagramId = useId()
    const venmoId = useId()

    const createShop = async(e) => {
        e.preventDefault()
        
        // prevent form submission if any of these aren't filled out
        if (!ownerId) {
            setFormError('You must be logged in to create a shop.')
            return
        }
        let formatError = false;
        if (!shopName) { // can't allow shops with the name 'new'
            setNameError('*Shop name is required.')
            formatError = true;
        } else { setNameError(null)}
        if (shopName === 'new') {
            setNameError('*That name is already taken.')
            formatError = true;
        }
        if (shopName.includes('_')) {
            setNameError('*Shop name may not contain underscores.')
            formatError = true;
        }
        if (!shopDescription) {
            setDescriptionError('*Description is required.')
            formatError = true;
        } else {setDescriptionError(null)}
        if (!venmo) {
            setVenmoError('*Venmo handle is required.')
            formatError = true;
        } else {setVenmoError(null)}
        if (formatError) {
            alert('This form contains errors. Please fix the errors and resubmit.')
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
            let url = '/shops/'+shopName.split(' ').join('_')
            router.replace(url)
        }
    }

    return (
        <form className={styles.form} onSubmit={createShop}>
            <Label htmlFor={nameId}><strong>Name*</strong> Select a unique name for your shop. Your shop name must contain letters, may include spaces, and may not include underscores.</Label>
            <Input
                id={nameId}
                className={styles.input}
                type='text'
                placeholder='Shop name'
                onChange={(data) => { setShopName(data.value)}}
                error={nameError}
            />

            <Label htmlFor={descriptionId}><strong>Description*</strong> Write a description for your shop. Consider describing what you sell, what differentiates your shop from others, and what your brand values are.</Label>
            <Input
                id={descriptionId}
                className={styles.input}
                type='textarea'
                placeholder='Shop description'
                onChange={(data) => { setDescription(data.value)}}
                error={descriptionError}
            />

            <Label htmlFor={venmoId}><strong>Venmo*</strong> Add your shop's Venmo handle so your customers can pay you.</Label>
            <div className={styles.handleInput}>
                <img className={styles.logo} src='/logos/Venmo.png' alt=''/>
                <Input
                    id={venmoId}
                    type='text'
                    placeholder='Venmo handle'
                    onChange={(data) => { setVenmo(data.value)}}
                    error={venmoError}
                />  
            </div>

            <Label htmlFor={instagramId}>Instagram (optional): Add your shop's Instagram handle.</Label>
            <div className={styles.handleInput}>
                <img className={styles.logo} src='/logos/Instagram.png' alt=''/>
                <Input
                    id={instagramId}
                    type='text'
                    placeholder='Instagram handle'
                    onChange={(data) => { setInstagram(data.value)}}
                />
            </div>

            
            <Label>Save your shop and add your first listing!</Label>
            <Input
                type='submit'
                value='Create shop'
            />
            {formError && <p>{formError}</p>}
        </form>
    )
}