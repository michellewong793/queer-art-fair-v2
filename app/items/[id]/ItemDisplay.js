'use client'

import Link from 'next/link'
import styles from './ItemDisplay.module.css'
import Button from '../../../components/Button'
import ImageSlideshow from './ImageSlideshow'
import { useState } from 'react'
import Modal from '../../components/Modal'

// props: item, shop
export default function ItemDisplay(props) {
    const item = props?.item
    const shop = props?.shop
    const shopOwner = props?.shopOwner
    const [showOrderInfo, setShowOrderInfo] = useState(false)

    const mailSubject = 'Order for ' + item?.name + ' (Queer Art Faire Online)'
    const mailBody = 'Hello! I would like to place an order for your item ' + item?.name + ' (#' + item?.id + '). Let me know if more information is needed, and how best to provide payment. Thanks!'
    const shopOwnerName = shopOwner?.name ? shopOwner.name : 'the seller'

    return (
        <div className={styles.wrapper}>
            <ImageSlideshow imageUrls={item.image_urls}/>
            <div className={styles.namePriceWrapper}>
                <h2>{item?.name}</h2>
                <h2>${item?.price}</h2>
            </div>
            <p className={styles.shop}>Sold by <Link href={'/shops/'+shop?.name.split(' ').join('_')}>{shop?.name}</Link></p>

            <h2>Details</h2>
            <p className={styles.description}>{item?.description}</p>

            <Button
                className={styles.orderButton}
                text='Order Now'
                onClick={(e) => setShowOrderInfo(true)}
                />
            <Modal
                className={styles.orderDirections}
                isOpen={showOrderInfo}
                onRequestClose={(e) => setShowOrderInfo(false)}
            >
                <h2>How to order</h2>
                <p>All Queer Art Faire Online orders are placed directly with sellers via email. To place an order:</p>
                <ol>
                    <li>Click the button below to write an email to the seller{shopOwner?.name && <span>{', '+shopOwner.name+','}</span>} at {shopOwner?.email}. We'll draft an order message for you.</li>
                    
                    <li>Add any details you have for the order, for instance, order quantity (if more than one), measurements (if ordering something customizable), etc. Additionally, you can ask {shopOwnerName} questions about this product before finalizing your order.
                    </li>

                    <li>Hit 'send.' </li>
                    <li>Check your email periodically and respond to any follow up from {shopOwnerName} regarding your order or payment. We hope you have a great order experience :)</li>
                </ol>
                <br/>
                <a href={'mailto:'+shopOwner?.email+'?subject='+mailSubject+'&body='+mailBody}>
                    <Button 
                        text='Email Seller'
                    />
                </a>
            </Modal>
            <h2>Tags</h2>
            <p>
            {
                item?.keywords.map((word, k) => (
                    // TODO: make this link to search for word
                    <span key={k}><Link href='/'>{word}</Link>, </span>
                ))
            }
            </p>
        </div>
    )
}