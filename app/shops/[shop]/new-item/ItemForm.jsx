'use client'

// the form to create a new item
// Info needed: name, photos, description, price, quantity, expiration_date, key_words, shop_id

// TODO: limit number of images added, functionality to delete images

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { redirect } from "next/navigation";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import Label from "../../../components/forms/Label";
import Input from "../../../components/forms/Input";
import Button from "../../../../components/Button";
import styles from "./ItemForm.module.css"
import Clickable from "../../../components/Clickable";

export default function ItemForm(props) {
    const supabase = createClientComponentClient()
    const shopId = props?.shop.id;

    const [itemId, setId] = useState();
    const [itemName, setName] = useState();
    const [itemDescription, setDescription] = useState();
    const [itemPrice, setPrice] = useState();
    const [itemQuantity, setQuantity] = useState();
    const [keywords, setKeywords] = useState([]);

    const [images, setImages] = useState([]);

    const [imageUrls, setImageUrls] = useState([]);

    const [nameError, setNameError] = useState(null);
    const [descriptionError, setDescriptionError] = useState(null);
    const [priceError, setPriceError] = useState(null);
    const [quantityError, setQuantityError] = useState(null);
    const [keywordError, setKeywordError] = useState(null);
    const [imageError, setImageError] = useState(null);

    const [formError, setFormError] = useState(null);

    async function getImage(data) {
        let file = data.files[0]
        if (file) {
            setImages(arr => [ ...arr, file]);
        }
    }

    // adds a new row to the "items" table with the new item info (except the image urls)
    const createItem = async (e) => {
        e.preventDefault();

        let formatError = false;
        if (!itemName){ 
            setNameError('*You must add a name for your item.');
            formatError = true;
        } else { setNameError(false); }
        if (!itemDescription){ 
            setDescriptionError('*You must add a description for your item.');
            formatError = true;
        } else { setDescriptionError(false); }
        if (!itemPrice){ 
            setPriceError('*You must add a price for your item.');
            formatError = true;
        } else { setQuantityError(false); }
        if (!itemQuantity){ 
            setQuantityError('*You must add a quantity for your item.');
            formatError = true;
        } else { setQuantityError(false); }
        if (keywords.length === 0){ 
            setKeywordError('*You must add keywords for your item.');
            formatError = true;
        } else { setKeywordError(false); }
        if (images.length == 0){ 
            setImageError('*You must add at least one image of your item.');
            formatError = true;
        } else { setImageError(false); }

        if (formatError) {
            return;
        }
        
        // reset imageUrls
        setImageUrls([]);

        // put the item in the database
        const { data, error } = await supabase
            .from('items')
            .insert([{
                shop_id: shopId,
                name: itemName,
                description: itemDescription,
                price: itemPrice,
                quantity: itemQuantity,
                keywords: keywords
            }]).select()

        if (error) {
            setFormError(error.message)
            return;
        }
        if (data) {
            setId(data[0].id)
        }
    }
    // itemId is set after the item has been added to the database via createItem.
    useEffect (() => {

        // uploads the image to supabase storage and adds the image's public url to imageUrls[]
        async function uploadImage(image, itemId) {
            const imageId = uuidv4();

            const { data, error } = await supabase
                    .storage
                    .from('item-photos')
                    .upload(itemId + '/' + imageId, image)
            if (error) {
                setFormError(error.message)
                return
            }
            if (data) {
                addImageUrl(data.path);
            }
        }

        async function addImageUrl(path) {
            // Add the image url to the item
            const { data } = supabase
                .storage
                .from('item-photos')
                .getPublicUrl(path)
            if (data) {
                setImageUrls( arr => [ ...arr, data.publicUrl])
            }
        }

        async function uploadImages() {
            // upload the images to supabase storage
            await images.forEach(async image => {
                await uploadImage(image, itemId)
            })

        }
        
        if (!itemId || imageUrls.length > 0) return;
        // upload the images to item-photos bucket under folder [itemId]
        uploadImages();
        
    }, [itemId])

    // when all the image urls have been created (as uploadImages runs), add them to the items table
    useEffect(() => {

        async function updateItemImageUrls() {
            // set the imageUrls
            const { data, error } = await supabase
                .from('items')
                .update({ image_urls: imageUrls })
                .eq('id', itemId)
                .select()
            

            if(error) {
                console.warn(error)
            }
            if (data) {
            }
        }

        if (imageUrls.length !== images.length) return;
        if (imageUrls.length == 0) return;
        updateItemImageUrls();

        // redirect to the new item
        redirect('/items/' + itemId.toString(), 'push');
    }, [imageUrls])

    return (
        <>
        <h3>Create Item</h3>
        <p className={styles.instructions}>You're adding an item to your shop <b>{props?.shop.name}</b>. Fill out the form fields below.</p>
        <form onSubmit={createItem}>
            <Label><strong>Name* </strong>Give your item a concise, descriptive name.</Label>
            <Input
                className={styles.input}
                type='text'
                placeholder='eg. Mini Pink Panda Crocheted Plush'
                onChange={(data)=>{
                    setName(data.value);
                }}
                error={nameError}
            />

        <Label><strong>Description* </strong>Write a description for your item. Include all details you think a customer would need to know, for instance size/dimensions, materials, what's included in the purchase, etc.</Label>
        <Input
            className={styles.input}
            type='textarea'
            placeholder='eg. This hand-crocheted panda is made of cotton yarn and measures 3"...'
            onChange={(data)=>{
                setDescription(data.value);
            }}
            error={descriptionError}
        />

        <Label><strong>Price* </strong>Add the price of your item in USD. Consider factoring in additional costs such as shipping when setting a price.</Label>
        <Input
            className={styles.input + ' ' + styles.number}
            type='number'
            min='0.01'
            step='0.01'
            placeholder='eg. 28.50'
            onChange={(data) => {
                setPrice(data.value);
            }}
            error={priceError}
        />

        <Label><strong>Quantity* </strong>Add the quantity of your item--how many of this item would you be able to sell?</Label>
        <Input
            className={styles.input + ' ' + styles.number}
            type='number'
            min='1'
            placeholder='eg. 15'
            onChange={(data) => {
                setQuantity(data.value);
            }}
            error={quantityError}
        />

        <Label><strong>Keywords*</strong> Add keywords for your item. Separate keywords with commas or new lines. We use keywords to determine whether your item matches a users' search, so add all relevant search terms and check your spelling.</Label>
        <Input
            className={styles.input}
            type='textarea'
            placeholder='eg. stuffed animal, plush, plushie, panda, pink panda, toy, pink, crochet'
            onChange={(data) => {
                setKeywords((data.value).split(/[ \n]*,[ \n]*|[, ]*\n[, ]*/).filter(keyword => keyword.match('[A-Za-z]'))); //keywords must contain letters
            }}
            error={keywordError}
        />

        <div className={styles.imageContainer}>
        
        {
            images.map((image, k) => {
                return(
                    <Clickable key={k} className={styles.imageWrapper}>
                        <img 
                            className={styles.image}
                            src={URL.createObjectURL(image)} 
                            width='100px'
                            />

                        <img
                            className={styles.deleteButton}
                            src='/TrashIcon.svg'
                            onClick={() => {setImages(images.slice(0, k).concat(images.slice(k + 1, images.length)))}}
                        />                
                    </Clickable>
                )        
            })
        }

        <Input
            className={styles.input + ' ' + styles.fileInput}
            type='file'
            accept="image/png, image/jpeg, image/jpg"
            onChange={(data) => getImage(data)} 
            error={imageError}
        />
        </div>

        <Input
            type='submit'
            value='Create item'
        />
        {formError && <p>formError</p>}
        </form>
        </>
    )
}   