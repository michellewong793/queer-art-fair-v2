import styles from './NewItemCard.module.css'
import Link from 'next/link'

export default function NewItemCard() {
    return (
        <div className={styles.wrapper} title='New item'>
            <Link href='./new-item' target="_blank" rel="noopener noreferrer">
                <div className={styles.plus}>
                    <img src='/PlusIcon.svg' />
                </div>
            </Link>
        </div>
    )
}