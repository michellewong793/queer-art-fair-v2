'use client'

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation";
import Label from "../../../components/forms/label";
import Input from "../../../components/forms/input";
import styles from "./ShopEditForm.module.css"

export default function ShopEditForm( props ) {
    const supabase = createClientComponentClient()
    const router = useRouter()

    const [name, setName] = useState()
    const [description, setDescription] = useState()
    const [instagram, setInstagram] = useState()
    const [venmo, setVenmo] = useState()
    const [id, setId] = useState()

    const [nameError, setNameError] = useState(null)
    const [descriptionError, setDescriptionError] = useState(null)
    const [venmoError, setVenmoError] = useState(null)
    const [formError, setFormError] = useState()

    // set all of the state variables
    useEffect(() => {
        let shop = props?.shop
        setId(shop.id)
        setName(shop.name)
        setDescription(shop.description)
        setInstagram(shop.instagram)
        setVenmo(shop.venmo)
    }, [props?.shop])

    // how to update a shop
    async function updateShop(e) {
        e.preventDefault()
        let formatError = false;
        if (!name) { // can't allow shops with the name 'new'
            setNameError('*Shop name is required.')
            formatError = true;
        } else { setNameError(null)}
        if (name === 'new') {
            setNameError('*That name is already taken.')
            formatError = true;
        }
        if (!description) {
            setDescriptionError('*Description is required.')
            formatError = true;
        } else {setDescriptionError(null)}
        if (!venmo) {
            setVenmoError('*Venmo handle is required.')
            formatError = true;
        } else {setVenmoError(null)}
        if (formatError) {
            return;
        }

        let { error } = await supabase
            .from('shops')
            .update({
                name: name,
                description: description,
                instagram: instagram,
                venmo: venmo
            })
            .eq('id', id)
        
        if (error) {
            setFormError("Your shop could not be updated. Error: ", error.message)
        } else {
            router.push('/shops/'+name.split(' ').join('_'))
        }
    }

    return (
        <form onSubmit={(e) => updateShop(e)}>
            <Label><strong>Name*</strong> Your shop name must be unique and may not contain underscores.</Label>
            <Input
                className={styles.input}
                type='text'
                value={name || ''}
                onChange={(data) => setName(data.value)}
                error={nameError}
            />

            <Label><strong>*Description</strong></Label>
            <Input
                className={styles.input}
                type='textarea'
                value={description || ''}
                onChange={(data) => setDescription(data.value)}
                error={descriptionError}
            />

            <div className={styles.handleWrapper}>
                <div>
                    <Label><strong>Instagram</strong></Label>
                    <div className={styles.handleInput}>
                        <img className={styles.logo} src='/logos/Instagram.png'></img>
                        <Input
                            className={styles.input}
                            type='text'
                            value={instagram || ''}
                            onChange={(data) => setInstagram(data.value)}
                        />
                    </div>
                </div>

                <div>
                    <Label><strong>Venmo</strong></Label>
                    <div className={styles.handleInput}>
                        <img className={styles.logo} src='/logos/Venmo.png'></img>
                        <Input
                            className={styles.input}
                            type='text'
                            value={venmo || ''}
                            onChange={(data) => setVenmo(data.value)}
                            error={venmoError}
                        />
                    </div>
                </div>
            </div>

            <Input
                type='submit'
                value='Save changes'
            />
            {formError && <p>formError</p>}
        </form>
    )
}