import Link from 'next/link'
import styles from './Card.module.css'
import Clickable from './Clickable'
import { ReactNode } from 'react'


type CardProps = {
    className?,
    image?,
    url?,
    edit?,
    editUrl?,
    children: ReactNode
}

const Card: React.FC<CardProps> = ({
    className,
    image,
    url,
    edit,
    editUrl,
    children
}) => {
    return (
        <Clickable className={className}>
            <div className={styles.wrapper}>
                <Link className={styles.link} href={url} rel="noopener noreferrer" target="_blank">
                    <img className={styles.image} src={image} />
                </Link>
                <Link className={styles.link} href={editUrl} rel="noopener noreferrer" target="blank">
                    <img className={edit ? styles.editIcon : styles.hidden} src={'/PencilEditIcon.svg'} />
                </Link>

                <div className={styles.textWrapper}>
                    {children}
                </div>
            </div>
        </Clickable>
    )
}

export default Card;