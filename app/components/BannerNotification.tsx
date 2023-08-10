import { ReactNode, useEffect, useState } from "react"
import Clickable from "./Clickable";
import styles from './BannerNotification.module.css'

type BannerNotificationProps = {
    className?,
    type?: string, //error, success, neutral (default)
    children: ReactNode;
}

const BannerNotification: React.FC<BannerNotificationProps> = ({
    className,
    type,
    children
}) => {
    const [notificationType, setType] = useState(styles.neutral);
    const [char, setChar] = useState('Alert: ')
    useEffect(() => {
        switch(type) {
            case 'error':
                setType(styles.error);
                setChar('Error! ')
                break;
            case 'success':
                setType(styles.success)
                setChar('Success! ')
                break;
            default:
                setType(styles.neutral)
                setChar('Alert: ')
        }
    }, [type])

    

    return (
        <Clickable className={notificationType}>
            <button 
                className={styles.close} 
                onClick={() => setType(styles.dismissed)}
            >
            <p><strong>×</strong></p>
            </button>
            <p>
                <span>{char}</span>
                {children}
            </p>
        </Clickable>
    )
}

export default BannerNotification