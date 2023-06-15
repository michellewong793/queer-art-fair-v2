import Button from "./Button"
import Styles from './Footer.module.css'

const Footer = (props) => {
    return (
        <div>
            <div className={Styles.footerDecor}></div>
            <div className={Styles.footer}>
                <h3 className={Styles.centerText}>Get updates from us!</h3>

                <div className={Styles.buttonContainer}>
                    <Button text='Join our email newsletter' 
                        backgroundColor="white"
                        textColor="#002809"
                        borderColor='#FF4C4C'
                        hoverBackgroundColor="#002809"
                        hoverTextColor="white"
                        url='https://subscribepage.io/queerartfaire'
                        width='432px'
                    />
                </div>
                <div className={Styles.buttonContainer}>    
                    <Button text='Follow us on Instagram' 
                        backgroundColor="white" 
                        textColor="#002809" 
                        borderColor='#FF4C4C'
                        hoverBackgroundColor="#002809"
                        hoverTextColor="white"
                        url='https://www.instagram.com/queerartfairsf/'
                        width='432px'
                        />
                </div>

            </div>
        </div>
    )
}

export default Footer;