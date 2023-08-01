import styles from './ItemCard.module.css'
import Card from './Card'

// props = item
const ItemCard = (props) => {
    const editUrl = '/items/'+props?.item?.id+'/edit'
    const viewUrl = '/items/'+props?.item?.id
    const url = props?.edit ? editUrl : viewUrl
    
    return (
        <Card
        image={props?.item?.image_urls[0]}
        url={viewUrl}
        edit={props?.edit}
        editUrl={editUrl}
        >
            <p className={styles.itemName}>{props?.item?.name}</p>
            <p className={styles.itemPrice}>${props?.item?.price}</p>
        </Card>
    )
}

export default ItemCard