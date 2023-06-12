import style from './strawberry.module.css';

const Strawberry = (props) => {
    let strawberryStyles = {
        container: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center', 
            paddingTop: 20,
            paddingLeft: '10%',
            paddingRight: '10%',
            marginLeft: 'auto',
            marginRight: 'auto',
        },

        imageContainer: {
            display: 'flex',
            flexDirection: 'column'
        },

        mediumStrawberry: {
            display: props.showMediumStrawberry, 
        },

        largeStrawberry: {
            display: props.showLargeStrawberry,
        },

    };
    return ( 
            <div style = {strawberryStyles.container}>
                <div className = {style.imageLeft}>
                    <div style = {strawberryStyles.mediumStrawberry} className = {style.mediumStrawberry} />
                    <div style = {strawberryStyles.largeStrawberry} className = {style.largeStrawberry} />
                </div>
                
                <p className = {style.text}>{props.heading}</p>

                <div className = {style.imageRight}>
                    <div style = {strawberryStyles.mediumStrawberry} className = {style.mediumStrawberry}  />
                    <div style = {strawberryStyles.largeStrawberry} className = {style.largeStrawberry} />
                </div>
            </div>
    )
};

export default Strawberry;