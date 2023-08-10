'use client'

// the form to create a new item
// Info needed: name, photos, description, price, quantity, expiration_date, key_words, shop_id

// TODO: limit number of images added, limit image size

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useState, useId } from "react";
import Label from "../../../components/forms/label";
import Input from "../../../components/forms/input";
import styles from "./ItemForm.module.css"
import DeleteableImage from "../../../components/DeletableImage"
import { deleteLocalImage, getLocalImage, updateDatabaseImages } from '../../../components/imageHandler'
import { useRouter } from "next/navigation";

export default function ItemForm(props) {
    const supabase = createClientComponentClient()
    const router = useRouter()
    const shopId = props?.shop.id;

    const [itemName, setName] = useState();
    const [itemDescription, setDescription] = useState();
    const [itemPrice, setPrice] = useState();
    const [itemQuantity, setQuantity] = useState();
    const [keywords, setKeywords] = useState([]);

    const [images, setImages] = useState([]);

    const [nameError, setNameError] = useState(null);
    const [descriptionError, setDescriptionError] = useState(null);
    const [priceError, setPriceError] = useState(null);
    const [quantityError, setQuantityError] = useState(null);
    const [keywordError, setKeywordError] = useState(null);
    const [imageError, setImageError] = useState(null);

    const [formError, setFormError] = useState(null);

    const nameId = useId()
    const descriptionId = useId()
    const priceId = useId()
    const quantityId = useId()
    const keywordId = useId()

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
            let itemId = data[0].id
            // add the images and alt text
            await updateDatabaseImages(itemId, images)
            router.replace('/items/'+itemId)
        }
    }

    return (
        <>
        <h2>Create Item</h2>
        <p className={styles.instructions}>You're adding an item to your shop <b>{props?.shop.name}</b>. Fill out the form fields below.</p>
        <form onSubmit={createItem}>
            <Label htmlFor={nameId}><strong>Name* </strong>Give your item a concise, descriptive name.</Label>
            <Input
                id={nameId}
                className={styles.input}
                type='text'
                placeholder='eg. Mini Pink Panda Crocheted Plush'
                onChange={(data)=>{
                    setName(data.value);
                }}
                error={nameError}
            />

        <Label htmlFor={descriptionId}><strong>Description* </strong>Write a description for your item. Include all details you think a customer would need to know, for instance size/dimensions, materials, what's included in the purchase, etc.</Label>
        <Input
            id={descriptionId}
            className={styles.input}
            type='textarea'
            placeholder='eg. This hand-crocheted panda is made of cotton yarn and measures 3"...'
            onChange={(data)=>{
                setDescription(data.value);
            }}
            error={descriptionError}
        />

        <Label htmlFor={priceId}><strong>Price* </strong>Add the price of your item in USD. Consider factoring in additional costs such as shipping when setting a price.</Label>
        <Input
            id={priceId}
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

        <Label htmlFor={quantityId}><strong>Quantity* </strong>Add the quantity of your item--how many of this item would you be able to sell?</Label>
        <Input
            id={quantityId}
            className={styles.input + ' ' + styles.number}
            type='number'
            min='1'
            placeholder='eg. 15'
            onChange={(data) => {
                setQuantity(data.value);
            }}
            error={quantityError}
        />

        <Label htmlFor={keywordId}><strong>Keywords*</strong> Add keywords for your item. Separate keywords with commas or new lines. We use keywords to determine whether your item matches a users' search, so add all relevant search terms and check your spelling.</Label>
        <Input
            id={keywordId}
            className={styles.input}
            type='textarea'
            placeholder='eg. stuffed animal, plush, plushie, panda, pink panda, toy, pink, crochet'
            onChange={(data) => {
                setKeywords((data.value).split(/[ \n]*,[ \n]*|[, ]*\n[, ]*/).filter(keyword => keyword.match('[A-Za-z]'))); //keywords must contain letters
            }}
            error={keywordError}
        />

        <Label><strong>Images*</strong> Add images that illustrate key features of your item, such as views from different angles, color, and texture. For each image, write <strong>alt text</strong> describing the key features each image illustrates for the customer. Customers will read this alt text if images are unable to load or if they are using a screenreader.</Label>

        <div className={styles.imagesContainer}>
        
        {
            images.map((image, k) => {
                if (image.deleted) return
                return(
                    <div key={k} className={styles.imageAltWrapper}>
                        <div>
                        <DeleteableImage
                            className={styles.image}
                            imageUrl={image.url}
                            altText={'Image '+k}
                            deleteFunction={() => {setImages(deleteLocalImage(image, images))}}
                        />
                        </div>
                        
                        <div className={styles.altTextWrapper}>
                            <Input
                                ariaLabel={'Alt text for image ' + {k}}
                                class={styles.altText}
                                type='textarea'
                                placeholder="alt text, eg 'front view of panda showing purple body, pink ears, and embroidered smile'"
                                onChange={(data) => 
                                    // updates the alt text
                                    setImages(images.map((i) => {
                                        if (i.name == image.name) {
                                            return {
                                                name: image.name,
                                                uploaded: image.uploaded,
                                                deleted: image.deleted,
                                                file: image.file,
                                                url: image.url,
                                                alt: data.value
                                            }
                                        } else {
                                            return i
                                        }
                                    }))
                                }
                            />
                        </div>
                    </div>
                    
                )        
            })
        }

        <Input
            ariaLabel="Upload new image"
            className={styles.input + ' ' + styles.fileInput}
            type='file'
            accept="image/png, image/jpeg, image/jpg"
            onChange={(data) => setImages([...images, getLocalImage(data)])} 
            error={imageError}
        />
        </div>

        <Label>Hit this button to create your item. After it's created, it will be publicly viewable and searchable. Customers will send their orders directly to your account email<strong>{' '+props?.email}</strong>, so be sure to check it periodically.</Label>
        <Input
            type='submit'
            value='Create item'
        />
        {formError && <p>formError</p>}
        </form>
        </>
    )
}   