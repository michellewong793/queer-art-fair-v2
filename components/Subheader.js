import Link from "next/link";

const Subheader = (props) => {
    let styles = {
        QAFTitle: {
            margin: 'auto',
            textAlign: 'center',
            color: '#1A361E',
            textDecoration: 'none',
        },
        link: {
            textDecoration: 'none',
        },
        smallText: {
            margin: 'auto',
            marginTop: '20px',
            textAlign: 'center',
            fontStyle: 'italic',
            fontFamily: 'Clemente',
            fontWeight: 200,
            color: '#FF4D4D',
        }
    }

    return (
        <div>
            <Link href='/' style={styles.link}><h1 style={styles.QAFTitle}>QUEER ART FAIRE</h1></Link>
            <p style={styles.smallText}>FRESH ART FAIRS IN THE BAY AREA</p>
        </div>
    )
}

export default Subheader;