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

        strawberry2: {
            display: props.showStrawberry2, 
        },

        strawberry3: {
            display: props.showStrawberry3,
        },

    };
    return ( 
            <div style = {strawberryStyles.container}>
                <div className = {style.imageLeft}>
                    <div style = {strawberryStyles.strawberry2} className = {style.strawberry2} />
                    <div style = {strawberryStyles.strawberry3} className = {style.strawberry3} />
                </div>
                
                <p className = {style.text}>{props.heading}</p>

                <div className = {style.imageRight}>
                    <div style = {strawberryStyles.strawberry2} className = {style.strawberry2}  />
                    <div style = {strawberryStyles.strawberry3} className = {style.strawberry3} />
                </div>
            </div>
    )
};

export default Strawberry;