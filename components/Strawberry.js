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

        imageLeft: {
            marginLeft: 100,
            marginRight: 50
        }, 

        imageRight: {
            marginLeft: 50,
            marginRight: 100
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
                <img style = {strawberryStyles.imageLeft} src = {props.imagePath} height={props.height} width = {props.width}/>
                <p style = {strawberryStyles.text}>{props.heading}</p>
                <img style = {strawberryStyles.imageRight} src = {props.imagePath} height={props.height} width = {props.width}/>
            </div>
    )
};

export default Strawberry;