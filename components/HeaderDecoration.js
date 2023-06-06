const HeaderDecoration = (props) => {
    let headerStyles = {
        width: '100%',
        height: '74px',
        backgroundImage: "url('TopDecoration.png')",
        backgroundRepeat: 'repeat-x',
        filter: 'drop-shadow(0 0px 10px #000000)',
    }
    return (<div style={headerStyles}></div>)
}

export default HeaderDecoration;