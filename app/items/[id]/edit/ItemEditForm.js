'use client'

import Label from '../../../components/forms/Label'
import Input from '../../../components/forms/Input'
import styles from './ItemEditForm.module.css'
import { useState } from 'react'

export default function ItemEditForm( props ) {
    const item = props?.item

    const [name, setName] = useState(item?.name)
    const [description, setDescription] = useState(item?.description)
    const [price, setPrice] = useState(item?.price)
    // TODO: how to deal with quantity without screwing up orders in progress
    const [quantity, setQuantity] = useState(item?.quantity)
    const [keywords, setKeywords] = useState(item?.keywords)

    return (
        <form>
            <Label><strong>Name*</strong></Label>
            <Input
                className={styles.input}
                type='text'
                value={name}
                onChange={(data) => setName(data.value)}
            />

            <Label><strong>Description*</strong></Label>
            <Input
                className={styles.input}
                type='textarea'
                defaultValue={description}
                onChange={(data) => setDescription(data.value)}
            /> 

            <Label><strong>Price*</strong></Label>
            <Input
                className={styles.input + ' ' + styles.number}
                type='number'
                min='0.01'
                step='0.01'
                value={price}
                onChange={(data) => {
                    setPrice(data.value);
                }}
            />  

            <Label><strong>Quantity*</strong></Label>
            <Input
                className={styles.input + ' ' + styles.number}
                type='number'
                min='1'
                value={quantity}
                onChange={(data) => {
                    setQuantity(data.value);
                }}
            />  

            <Label><strong>Keywords*</strong></Label>
            <Input
                className={styles.input}
                type='textarea'
                defaultValue={keywords.join(', ')}
                onChange={(data) => {
                    setKeywords((data.value).split(/[ \n]*,[ \n]*|[, ]*\n[, ]*/).filter(keyword => keyword.match('[A-Za-z]'))); //keywords must contain letters
                }}
            />

            <Label><strong>Images*</strong></Label>
            <Input
                className={styles.input + ' ' + styles.fileInput}
                type='file'
            />

            <Input 
                type="submit"
                value="Update"
            />
        </form>
    )
}

