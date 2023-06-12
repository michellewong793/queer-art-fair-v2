const Testimonial = (Props) => {
    let Styles = {
        container: {
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'center'
        },
        textContainer: {
            width: '60%',
            padding: '10px',
            margin: '10px',
            border: '1px solid black'
        }
    }

    return (
        <div style={Styles.container}>
            <img src='heart.svg'></img>
            <div style={Styles.textContainer}>
                <p>"<em>{Props.testimonial}</em>"</p>
                <p>-{Props.source}</p>
            </div>
            
            <img src='heart.svg'></img>
        </div>
    )
}

export default Testimonial;