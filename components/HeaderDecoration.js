const HeaderDecoration = (props) => {
    let styles = {
        header: {
            width: '100%',
            height: '74px',
            backgroundImage: "url('HeaderEllipse.svg')",
            backgroundRepeat: 'repeat-x',
            filter: 'drop-shadow(0 10px 5px rgba(0, 0, 0, 0.2))',
            marginBottom: '40px',
        }
    }

    return (<div style={styles.header}></div>)
}

export default HeaderDecoration;