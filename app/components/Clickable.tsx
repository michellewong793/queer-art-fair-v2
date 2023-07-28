import { ReactNode } from "react"
import styles from './Clickable.module.css'

/**Add <Clickable> as a surrounding container to any element to mimic button animations on hover and when pressed. */
type ClickableProps = {
    className?,
    children: ReactNode;
}

const Clickable: React.FC<ClickableProps> = ({
    className,
    children
}) => {
    return (
        <div className={styles.clickable + ' ' + className}>
            {children}
        </div>
    )
}

export default Clickable;