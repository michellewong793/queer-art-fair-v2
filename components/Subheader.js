const Subheader = (props) => {

    let QAFTextStyle = {
        margin: 'auto',
        textAlign: 'center',
        color: '#1A361E',
    }

    let smallTextStyle = {
        margin: 'auto',
        textAlign: 'center',
        fontStyle: 'italic',
        color: '#FF4D4D',
    }

    return (
        <div>
            <h1 style={QAFTextStyle}>QUEER ART FAIRE</h1>
            <p style={smallTextStyle}>FRESH ART FAIRS IN THE BAY AREA</p>
        </div>
    )
}

export default Subheader;