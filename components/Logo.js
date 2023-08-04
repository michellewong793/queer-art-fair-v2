import Styles from './Logo.module.css'

const Logo = (props) => {
    return (
        <img className={Styles.logoImg} src='/./QAFLogoOrangePuffy.png' alt='Queer Art Faire logo, an inflatable heart-shaped fruit with water droplets and the letters Q A F written inside'/>
    )
}

export default Logo;