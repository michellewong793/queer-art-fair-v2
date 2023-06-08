import Link from "next/link";

const Logo = (props) => {
    let divStyle = {
        display: 'flex',
        width: '100%',
        marginBottom: '20px',
    }
    let imgStyle = {
        margin: 'auto',
        width: '240px',
    }
    return (
        <div style={divStyle}>
            <Link  style={imgStyle} href='/'><img src='./QAFLogoOrangePuffy.svg'></img></Link>
        </div>
    )
}

export default Logo;