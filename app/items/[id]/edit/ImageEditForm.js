'use client'
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import Label from '../../../components/forms/Label'
import Input from '../../../components/forms/Input'
import styles from './ImageEditForm.module.css'
import { useState } from 'react'

export default function DetailEditForm( props ) {
    const item = props?.item
    const supabase = createClientComponentClient()

    const [images, setImages] = useState([])
    const [imageError, setImageError] = useState(null)

    function checkFields() {
        let error = false;
        if (!images || images?.length == 0) {
            setImageError('*Images are required.')
            error = true;
        }

        return error
    }

    async function updateItem(e) {
        e.preventDefault()
        if (checkFields()) return

        // TODO: actually update the item

    }
    return (
        <div>
        <h3>Item Images</h3>
        <form onSubmit={(e) => updateItem(e)}>
            <Label><strong>Images*</strong></Label>
            <Input
                className={styles.fileInput}
                type='file'
                accept="image/png, image/jpeg, image/jpg"
                error={imageError}
            />

            <Input 
                type="submit"
                value="Update images"
            />
        </form>
        </div>
    )
}

