import Styles from './Logo.module.css'

const Logo = (props) => {
    return (
        <img className={Styles.logoImg} src='/./QAFLogoOrangePuffy.png' alt='Queer Art Faire logo'/>
    )
}

export default Logo;