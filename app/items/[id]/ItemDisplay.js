import Link from 'next/link'
import styles from './ItemDisplay.module.css'
import Button from '../../../components/Button'

// props: item, shop
export default function ItemDisplay(props) {
    const item = props?.item
    const shop = props?.shop
    return (
        <div className={styles.wrapper}>
        {/* slideshow */}
            <div className={styles.namePriceWrapper}>
                <h3>{item?.name}</h3>
                <h3>${item?.price}</h3>
            </div>
            <p className={styles.shop}>Sold by <Link href={'/shops/'+shop?.name}>{shop?.name}</Link></p>

            <h3>Details</h3>
            <p className={styles.description}>{item?.description}</p>
            <Button text='Order Now'/>
            <h3>Tags</h3>
        </div>
    )
}