import NewCard from '../../../components/NewCard'
import styles from './NewItemCard.module.css'
import Link from 'next/link'

export default function NewItemCard() {
    return (
        <Link className={styles.link} href='./new-item' target="_blank" rel="noopener noreferrer">
            <NewCard className={styles.card}/>
        </Link>
    )
}