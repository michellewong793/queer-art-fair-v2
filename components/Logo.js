import Styles from './Logo.module.css'

const Logo = (props) => {

    let divStyle = {
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        marginBottom: '20px',
    }
    let imgStyle = {
        margin: 'auto',
        width: '240px',
        height: 'auto'
    }

    return (
        <img className={Styles.logoImg} src='/./QAFLogoOrangePuffy.png'></img>
    )
}

export default Logo;