import Link from "next/link";
import Styles from "./Logo.module.css"

const Logo = (props) => {
    return (
        <div className={Styles.container}>
            <img className={Styles.logoImg} src='./QAFLogoOrangePuffy.png'></img>
        </div>
    )
}

export default Logo;