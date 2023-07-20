import Link from 'next/link'
import styles from './ItemCard.module.css'

// props = item
const ItemCard = ({item}) => {
    
    return (
        
        <div className={styles.wrapper} title={item?.name}>
            <Link className={styles.link} href={'/items/'+item?.id}>
                <img className={styles.image} src={item?.image_urls[0]} />  
                <div className={styles.textWrapper}>
                    <p className={styles.itemName}>{item?.name}</p>
                    <p className={styles.itemPrice}>${item?.price}</p>
                </div>
            </Link>
        </div>
    )
}

export default ItemCard