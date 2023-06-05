function numOfStrawberries(text) {
    if (text.length < 10) {
        
    }
}


const Strawberry = (props) => {
    let strawberryStyles = {
        container: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center', 
            paddingTop: 100,
            paddingLeft: '10%',
            paddingRight: '10%',
            marginLeft: 'auto',
            marginRight: 'auto',
        },

        image: {
            height: 80.62,
            width: 64,
            marginLeft: 15,
            marginRight: 15
        }, 

        text: {
            textAlign: 'center',
            fontSize: 80, 
            margin: 0,
            color: '#1A361E', 
            fontFamily: 'Ilyas'
        }
        
    };
    return ( 
            <div style = {strawberryStyles.container}>
                <img style = {strawberryStyles.image} src = '/strawberry3.png'/>
                <img style = {strawberryStyles.image} src = '/strawberry3.png'/>
                <p style = {strawberryStyles.text}>{props.heading}</p>
                <img style = {strawberryStyles.image} src = '/strawberry3.png'/>
                <img style = {strawberryStyles.image} src = '/strawberry3.png'/>
            </div>
    )
};

export default Strawberry;