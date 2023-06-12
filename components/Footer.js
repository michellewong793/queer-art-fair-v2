import Link from "next/link"
import Button from "./Button"

const Footer = (props) => {
    let styles = {
        footerDecor: {
            width: '100%',
            height: '74px',
            backgroundImage: "url('FooterEllipse.svg')",
            backgroundRepeat: 'repeat-x',
            filter: 'drop-shadow(0 -10px 5px rgba(0, 0, 0, 0.2))',
            marginBottom: '-1px', // There is a space at the bottom for some reason
            marginTop: '40px',
        },

        footer: {
            width: '100%',
            backgroundColor: '#FFF9ED',
            paddingTop: '20px',
            paddingBottom: '40px',
        },

        centerText: {
            textAlign: 'center',
        },

        buttonContainer: {
            height: 125,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-around',
        },
    }

    return (
        <div>
            <div style={styles.footerDecor}></div>
            <div style={styles.footer}>
                <h3 style={styles.centerText}>Get updates from us!</h3>

                <div style = {styles.buttonContainer}>
                    <Button text='Join our email newsletter' 
                        backgroundColor="white"
                        textColor="#002809"
                        borderColor='#FF4C4C'
                        hoverBackgroundColor="#002809"
                        hoverTextColor="white"
                        width='300px'
                        url='https://subscribepage.io/queerartfaire'
                    />

                    <Button text='Follow us on Instagram' 
                        backgroundColor="white" 
                        textColor="#002809" 
                        borderColor='#FF4C4C'
                        hoverBackgroundColor="#002809"
                        hoverTextColor="white"
                        width='300px'
                        />

                </div>
            </div>
        </div>
    )
}

export default Footer;