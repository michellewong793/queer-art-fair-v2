'use client'
import { ReactNode } from "react"
import styles from './Clickable.module.css'

/**Add <Clickable> as a surrounding container to any element to mimic button animations on hover and when pressed. */
type ClickableProps = {
    className?,
    onClick?,
    children: ReactNode;
}

const Clickable: React.FC<ClickableProps> = ({
    className,
    onClick,
    children
}) => {
    const handleOnClick = (event) => {
        if (typeof onClick === "function") {
            onClick({
                value: event.target.value
            })
        }
    }
    return (
        <div 
        className={styles.clickable + ' ' + className}
        onClick={handleOnClick}
        >
            {children}
        </div>
    )
}

export default Clickable;