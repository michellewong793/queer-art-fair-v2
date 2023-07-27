import Link from 'next/link'
import styles from './ItemDisplay.module.css'
import Button from '../../../components/Button'
import ImageSlideshow from './ImageSlideshow'

// props: item, shop
export default function ItemDisplay(props) {
    const item = props?.item
    const shop = props?.shop
    return (
        <div className={styles.wrapper}>
            <ImageSlideshow imageUrls={item.image_urls}/>
            <div className={styles.namePriceWrapper}>
                <h3>{item?.name}</h3>
                <h3>${item?.price}</h3>
            </div>
            <p className={styles.shop}>Sold by <Link href={'/shops/'+shop?.name.split(' ').join('_')}>{shop?.name}</Link></p>

            <h3>Details</h3>
            <p className={styles.description}>{item?.description}</p>
            <Button
                className={styles.orderButton}
                text='Order Now'
                />
            <h3>Tags</h3>
            <p>
            {
                item?.keywords.map((word, k) => (
                    // TODO: make this link to search for word
                    <span><Link href='/'>{word}</Link>, </span>
                ))
            }
            </p>
        </div>
    )
}