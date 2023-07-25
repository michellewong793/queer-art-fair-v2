import ItemCard from "../../../components/ItemCard"
import styles from "./ProductEditSection.module.css"

export default async function ProductEditSection({items}) {    
    return (
        <>
        <h3>Your Products</h3>
        <div className={styles.products}>
            {items?.map(item => (
                <ItemCard item={item} edit={true}/>
            ))}
        </div>
        </>
    )
}