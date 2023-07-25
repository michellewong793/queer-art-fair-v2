import Link from 'next/link'
import styles from './ItemCard.module.css'

// props = item
const ItemCard = (props) => {
    const editUrl = '/items/'+props?.item?.id+'/edit'
    const viewUrl = '/items/'+props?.item?.id
    const url = props?.edit ? editUrl : viewUrl
    
    return (
        
        <div className={styles.wrapper} title={props?.item?.name}>
            <Link className={styles.link} href={url}>
                <img className={styles.image} src={props?.item?.image_urls[0]} />
                <img className={props?.edit ? styles.editIcon : styles.hidden} src={'/PencilEditIcon.svg'}/>
                <div className={styles.textWrapper}>
                    <p className={styles.itemName}>{props?.item?.name}</p>
                    <p className={styles.itemPrice}>${props?.item?.price}</p>
                </div>
            </Link>
        </div>
    )
}

export default ItemCard