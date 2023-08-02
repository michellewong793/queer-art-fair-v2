import { ReactNode } from "react"
import styles from './Modal.module.css'
import Clickable from "../../components/Clickable"

type ModalProps = {
    className?,
    isOpen?,
    onRequestClose?,
    children?: ReactNode,
}

const Modal: React.FC<ModalProps> = ({
    className,
    isOpen,
    onRequestClose,
    children
}) => {
    const handleClose = (event) => {
        if (typeof onRequestClose === "function") {
            onRequestClose({
                value: event.target.value
            })
        }
    }

    const visibility = isOpen ? styles.show : styles.hidden;

    return (
        <div className={styles.backdrop + ' ' + visibility}>
            <Clickable className={styles.container + ' ' + className}>
                <button 
                    className={styles.close}
                    onClick={handleClose}
                >
                    ×
                </button>

                <div className={styles.content}>
                    {children}
                </div>
            </Clickable>
            
        </div>
    )
}

export default Modal;