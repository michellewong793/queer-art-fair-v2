import style from './strawberry.module.css';

const Strawberry = (props) => {
    let strawberryStyles = {

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
            <div className = {style.container}>
                <div className = {style.imageLeft}>
                    <div style = {strawberryStyles.mediumStrawberry} className = {style.mediumStrawberry} />
                    <div style = {strawberryStyles.largeStrawberry} className = {style.largeStrawberry} />
                </div>
                
                <h2 className = {style.text}>{props.heading}</h2>

                <div className = {style.imageRight}>
                    <div style = {strawberryStyles.mediumStrawberry} className = {style.mediumStrawberry}  />
                    <div style = {strawberryStyles.largeStrawberry} className = {style.largeStrawberry} />
                </div>
            </div>
    )
};

export default Strawberry;