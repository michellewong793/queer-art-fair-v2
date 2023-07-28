import { ReactNode } from "react"
import styles from './Clickable.module.css'

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