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
                />

            <img
                className={styles.deleteButton}
                src='/TrashIcon.svg'
                onClick={handleOnClick}
                alt='Delete this image'
            />                
        </Clickable>
    )
}