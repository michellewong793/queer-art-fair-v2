'use client'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import Label from '../../../components/forms/label'
import styles from './DeleteForm.module.css'
import { useState } from 'react'
import Modal from '../../../components/Modal'
import Button from '../../../../components/Button'
import { useRouter } from 'next/navigation'

export default function DeleteForm(props) {
    const item = props?.item
    const shop = props?.shop
    const shopUrlName = shop?.name?.split(' ').join('_')
    const [trashConfirmation, setTrashConfirmation] = useState(false)
    
    const supabase = createClientComponentClient()
    const router = useRouter()
    async function deleteItem() {
        const {error} = await supabase
            .from('items')
            .delete()
            .eq('id', item?.id)

        if (error) {
            alert(error.message)
        } else {
            alert('Your item was deleted.')
            router.replace('/shops/'+shopUrlName)
        }
    }

    return (
        <div>
            <h3>Delete Item</h3>
            <Label>Click the button below only if you want to permanently delete this item.</Label>
            <Button text='Delete' onClick={() => setTrashConfirmation(true)} />

            <Modal
                isOpen={trashConfirmation}
                onRequestClose={(e) => setTrashConfirmation(false)}
            >
                <p className={styles.modalText}>Are you sure you want to delete {item?.name} (item #{item?.id})? <br/> <br/>This cannot be undone.</p>
                <br/>
                <Button
                    text='Permanently Delete'
                    onClick={() => deleteItem()}
                />
            </Modal>
        </div>
    )
}