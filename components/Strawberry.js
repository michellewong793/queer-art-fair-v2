import style from './strawberry.module.css';

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
                    <img style = {strawberryStyles.strawberry2} className = {style.strawberry2} src = {'/strawberry2.png'} />
                    <img style = {strawberryStyles.strawberry3} className = {style.strawberry3} src = {'/strawberry3.png'}/>
                </div>
                
                <p className = {style.text}>{props.heading}</p>

                <div className = {style.imageRight}>
                    <img style = {strawberryStyles.strawberry2} className = {style.strawberry2} src = {'/strawberry2.png'} />
                    <img style = {strawberryStyles.strawberry3} className = {style.strawberry3} src = {'/strawberry3.png'}/>
                </div>
            </div>
    )
};

export default Strawberry;