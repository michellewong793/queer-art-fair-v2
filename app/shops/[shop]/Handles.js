import styles from './Handles.module.css'

// props = logo, handle, url (optional)
const Handle = (props) => {
    return (
        <div className={styles.handle}>
            <img className={styles.logo} src={props?.logo} alt={props?.alt}/>
            <p>{props?.handle}</p>
        </div>
    )
    
}

const Handles = ({props}) => {
    return (
        <div className={styles.wrapper}>
            <Handle logo='/logos/Instagram.png' handle={'@'+props?.instagram} alt='Instagram: '/>
            <div className={styles.spacer}></div>
            <Handle logo='/logos/Venmo.png' handle={'@'+props?.venmo} alt='Venmo: '/>
        </div>
    )
}

export default Handles;