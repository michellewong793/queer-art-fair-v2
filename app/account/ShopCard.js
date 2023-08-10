import Card from '../components/Card'
import styles from './ShopCard.module.css'

// props = shop
export default function ShopCard ( props ) {
    const shop = props?.shop
    const urlName = shop?.name.split(' ').join('_')

    return (
        <Card
        image={'/QAFLogoOrangePuffy.png'}
        alt=""
        url={'/shops/'+urlName}
        edit={true}
        editUrl={'/shops/'+urlName+'/edit'}
        >
            <p className={styles.name}>{shop?.name}</p>
        </Card>
    )
}