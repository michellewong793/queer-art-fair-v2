'use client'
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import Label from '../../../components/forms/Label'
import Input from '../../../components/forms/Input'
import styles from './DetailEditForm.module.css'
import { useState } from 'react'
import BannerNotification from "../../../components/BannerNotification"
// TODO: other errors, non numeric quantities/prices

export default function DetailEditForm( props ) {
    const item = props?.item
    const supabase = createClientComponentClient()

    const [name, setName] = useState(item?.name)
    const [description, setDescription] = useState(item?.description)
    const [price, setPrice] = useState(item?.price)
    // TODO: how to deal with quantity without screwing up orders in progress
    const [quantity, setQuantity] = useState(item?.quantity)
    const [keywords, setKeywords] = useState(item?.keywords || [])

    const [nameError, setNameError] = useState(null)
    const [descriptionError, setDescriptionError] = useState(null)
    const [priceError, setPriceError] = useState(null)
    const [quantityError, setQuantityError] = useState(null)
    const [keywordError, setKeywordError] = useState(null)

    const [notifications, setNotifications] = useState([])

    function checkFields() {
        let error = false;
        if (!name) {
            setNameError('*Item name is required.')
            error = true;
        } else { setNameError(null) }

        if (!description) {
            setDescriptionError('*Description is required.')
            error = true;
        } else { setDescriptionError(null) }

        if (!price) {
            setPriceError('*Price is required.')
            error = true;
        } else { setPriceError(null) }
    
        if (!quantity) {
            setQuantityError('*Quantity is required.')
            error = true;
        } else { setQuantityError(null); }

        if (!keywords || keywords?.length == 0) {
            setKeywordError('*Keywords are required.')
            error = true;
        }

        return error
    }

    async function updateItem(e) {
        e.preventDefault()
        if (checkFields()) return

        // TODO: actually update the item
        let { error } = await supabase
            .from('items')
            .update({
                name: name,
                description: description,
                price: price,
                quantity: quantity,
                keywords: keywords
            })
            .eq('id', item.id)

        if (error) {
            setNotifications([...notifications, { type: 'error', value: error.message }])
            return
        }
        setNotifications([...notifications, { type: 'success', value: 'Your item was updated.'}])
    }
    return (
        <div>
        <h3>Item Details</h3>

        { notifications?.map (notification => (
            <BannerNotification type={notification.type}>
                {notification.value}
            </BannerNotification>
        ))}
        
        <form onSubmit={(e) => updateItem(e)}>
            <Label><strong>Name*</strong></Label>
            <Input
                className={styles.input}
                type='text'
                value={name}
                onChange={(data) => setName(data.value)}
                error={nameError}
            />

            <Label><strong>Description*</strong></Label>
            <Input
                className={styles.input}
                type='textarea'
                defaultValue={description}
                onChange={(data) => setDescription(data.value)}
                error={descriptionError}
            /> 

            <Label><strong>Price*</strong></Label>
            <Input
                className={styles.input + ' ' + styles.number}
                type='number'
                min='0.01'
                step='0.01'
                value={price}
                onChange={(data) => { setPrice(data.value); }}
                error={priceError}
            />  

            <Label><strong>Quantity*</strong></Label>
            <Input
                className={styles.input + ' ' + styles.number}
                type='number'
                min='1'
                value={quantity}
                onChange={(data) => { setQuantity(data.value); }}
                error={quantityError}
            />  

            <Label><strong>Keywords*</strong></Label>
            <Input
                className={styles.input}
                type='textarea'
                defaultValue={keywords.join(', ')}
                onChange={(data) => {
                    setKeywords((data.value).split(/[ \n]*,[ \n]*|[, ]*\n[, ]*/).filter(keyword => keyword.match('[A-Za-z]'))); //keywords must contain letters
                }}
                error={keywordError}
            />

            <Input 
                type="submit"
                value="Update details"
            />
        </form>
        </div>
    )
}

