import Clickable from "./Clickable"
import styles from "./NewCard.module.css"

export default function NewCard(props) {
    return (
        <Clickable 
        className={styles.wrapper + ' ' + props?.className}
        >
            <div className={styles.plus}>
                <img src='/PlusIcon.svg' alt='Add new'/>
            </div>
        </Clickable>
    )
}