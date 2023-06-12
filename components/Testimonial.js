const Testimonial = (Props) => {
    let Styles = {
        container: {
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'center'
        },
        textContainer: {
            width: '60%',
            padding: '10px',
            margin: '10px',
            border: '1px solid #FF4C4C',
            backgroundColor: '#ffbec0',
            boxShadow: '-1px 2px 5px 0px rgba(0, 0, 0, 0.5);'
        },
        source: {
            textAlign: 'center'
        }
    }

    return (
        <div style={Styles.container}>
            <div style={Styles.textContainer}>
                <p>"<em>{Props.testimonial}</em>"</p>
                <p style={Styles.source}>-{Props.source}</p>
            </div>
        </div>
    )
}

export default Testimonial;