import Clickable from './Clickable'
import styles from './DeletableImage.module.css'

export default function DeletableImage ( props ) {
    const handleOnClick = (event) => {
        if (typeof props?.deleteFunction === 'function') {
            props.deleteFunction()
        }
    }

    return (
        <Clickable className={styles.imageWrapper}>
            <img 
                className={styles.image}
                src={props?.imageUrl} 
                alt={props?.altText}
                id={props?.id}
                />

            <button type='button' className={styles.deleteButton} onClick={handleOnClick}>
                <img
                    className={styles.icon}
                    src='/TrashIcon.svg'
                    alt='Delete this image'
                />  
            </button>              
        </Clickable>
    )
}