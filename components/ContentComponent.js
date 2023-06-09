import Button from "./Button";
import style from "./contentComponent.module.css";
import Spacer from "./Spacer"

const ContentComponent = (props) => {
    let contentStyles = {

        imageRight: {
            display: props.imageRight,
        },

        imageLeft: {
            display: props.imageLeft,
        },

        heading: {
            fontSize: '25px', 
            color: '#1A361E', 
            fontFamily: "ClementePDak"
        },

        text: {
            fontSize: '16px', 
            color: '#0C180E', 
            fontFamily: 'ClementePDae',
        }
    };
    return (
        <div>
        <div style = {contentStyles.imageLeft} className = {style.container}>
            <img className = {style.image} src = {props.imagePath}/>
            <div className = {style.smallContainer}>
                <p style = {contentStyles.heading}>
                    {props.heading}
                </p>
                <p style = {contentStyles.text}> 
                    {props.text}
                </p>
                <Button text = {props.buttonText1}/>
                <Spacer height = {1}/>
                <Button text = {props.buttonText2}/>
            </div>
        </div>

        <div style = {contentStyles.imageRight} className = {style.container}>
            <div className = {style.smallContainer}>
                <p style = {contentStyles.heading}>
                    {props.heading}
                </p>
                <p style = {contentStyles.text}> 
                    {props.text}
                </p>
                <Button text = {props.buttonText}/>
                <Spacer height = {1}/>
                <Button text = {props.buttonText2}/>
            </div>
            <img className = {style.image} src = {props.imagePath}/>
        </div>
        </div>
    )
};

export default ContentComponent;
