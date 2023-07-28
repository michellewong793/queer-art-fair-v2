import Clickable from '../../../components/Clickable'
import styles from './NewItemCard.module.css'
import Link from 'next/link'

export default function NewItemCard() {
    return (
        <Link className={styles.link} href='./new-item' target="_blank" rel="noopener noreferrer">
            <Clickable className={styles.wrapper}>
                    <div className={styles.plus}>
                        <img src='/PlusIcon.svg' />
                    </div>
            </Clickable>
        </Link>
    )
}