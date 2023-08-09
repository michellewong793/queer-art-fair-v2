import Clickable from "./Clickable"
import styles from "./NewCard.module.css"

export default function NewCard(props) {
    return (
        <Clickable 
        className={styles.wrapper + ' ' + props?.className}
        onClick={props?.onClick}
        >
            <div className={styles.plus}>
                <img src='/PlusIcon.svg' />
            </div>
        </Clickable>
    )
}