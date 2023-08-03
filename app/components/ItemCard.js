'use client'
import styles from './ItemCard.module.css'
import Card from './Card'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useState } from 'react'
import Modal from './Modal'
import Button from '../../components/Button'

// props = item, edit (T/F), trash (T/F)
const ItemCard = (props) => {
    const item = props?.item
    const editUrl = '/items/'+item?.id+'/edit'
    const viewUrl = '/items/'+item?.id
    const [trashConfirmation, setTrashConfirmation] = useState(false)
    const [wasDeleted, setWasDeleted] = useState(false)

    const supabase = createClientComponentClient()
    async function deleteItem() {
        const {error} = await supabase
            .from('items')
            .delete()
            .eq('id', item?.id)

        if (error) {
            alert(error.message)
        }
    }

    async function trash() {
        await deleteItem();
        setTrashConfirmation(false);
        setWasDeleted(true);
        alert('Your item was deleted.');
    }
    
    return (
        <>
            { wasDeleted ? <></> : 
                <Card
                image={item?.image_urls[0]}
                url={viewUrl}
                edit={props?.edit}
                editUrl={editUrl}
                trash={props?.edit}
                trashFunction={() => setTrashConfirmation(true)}
                >
                    <p className={styles.itemName}>{item?.name}</p>
                    <p className={styles.itemPrice}>${item?.price}</p>
                </Card>
            
            }   

            <Modal
                isOpen={trashConfirmation}
                onRequestClose={(e) => setTrashConfirmation(false)}
            >
                <p className={styles.modalText}>Are you sure you want to delete {item?.name} (item #{item?.id})? <br/> <br/>This cannot be undone.</p>
                <br/>
                <Button
                    text='Delete'
                    onClick={() => trash()}
                />
            </Modal>
        </>
    )
}

export default ItemCard