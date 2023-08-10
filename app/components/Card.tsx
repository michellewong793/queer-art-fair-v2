'use client'

import Link from 'next/link'
import styles from './Card.module.css'
import Clickable from './Clickable'
import { ReactNode } from 'react'


type CardProps = {
    className?,
    image?,
    altText,
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
    altText,
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
                { edit && 
                    <Link 
                        className={styles.link} 
                        href={editUrl} 
                        rel="noopener noreferrer" 
                        target="_blank"
                    >
                            <img 
                                className={styles.icon} 
                                src={'/PencilEditIcon.svg'} 
                                alt='Open new page to edit'
                            />
                    </Link>
                }

                { trash && 
                    <button 
                        type='button'
                        onClick={handleOnTrash}
                        className={styles.button}
                    >
                        <img 
                            className={styles.icon} 
                            src={'/TrashIcon.svg'} 
                            alt='Delete'
                        /> 
                    </button>
                }
            </div>

            <Link className={styles.link} href={url} rel="noopener noreferrer" target="_blank">
                <img 
                    className={styles.image} 
                    src={image} 
                    alt={altText}
                />
                <div className={styles.textWrapper}>
                    {children}
                </div>
            </Link>

        </Clickable>
    )
}

export default Card;