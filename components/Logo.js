import Link from "next/link";

const Logo = (props) => {
    let styles = {
        container: {
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
            marginBottom: '20px',
        },
        logo: {
            margin: 'auto',
            width: '240px',
        }
    }

    return (
        <div style={styles.container}>
            <Link  style={styles.logo} href='/'><img src='./QAFLogoOrangePuffy.svg'></img></Link>
        </div>
    )
}

export default Logo;