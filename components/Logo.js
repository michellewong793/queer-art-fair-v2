const Logo = (props) => {
    let divStyle = {
        display: 'flex',
        width: '100%',
    }
    let imgStyle = {
        margin: 'auto',
        width: '150px',
    }
    return (
        <div style={divStyle}>
            <img style={imgStyle} src='./QAFLogoOrangePuffy.png'></img>
        </div>
    )
}

export default Logo;