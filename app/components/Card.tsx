'use client'

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
    trash?,
    trashFunction?,
    children: ReactNode
}

const Card: React.FC<CardProps> = ({
    className,
    image,
    url,
    edit,
    editUrl,
    trash,
    trashFunction,
    children
}) => {

    const handleOnTrash = (event) => {
        if (typeof trashFunction === "function") {
            trashFunction({
                value: event?.target.value
            })
        }
    }

    return (
        <Clickable className={styles.wrapper + ' ' + className}>
            <div className={styles.icons}>
                <Link className={styles.link} href={editUrl} rel="noopener noreferrer" target="_blank">
                        <img className={edit ? styles.icon : styles.hidden} src={'/PencilEditIcon.svg'} />
                </Link>

                <img className={trash ? styles.icon : styles.hidden} src={'/TrashIcon.svg'} onClick={handleOnTrash}/>
            </div>

            <Link className={styles.link} href={url} rel="noopener noreferrer" target="_blank">
                <img className={styles.image} src={image} />
                <div className={styles.textWrapper}>
                    {children}
                </div>
            </Link>

        </Clickable>
    )
}

export default Card;