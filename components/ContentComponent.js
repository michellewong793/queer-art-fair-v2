import Button from "./Button";
import style from "./contentComponent.module.css";
import Spacer from "./Spacer"

const ContentComponent = (props) => {

    const imageLeft = props.imageLeft;

    let contentStyles = {

        heading: {
            fontSize: '25px', 
            color: '#1A361E', 
            fontFamily: "ClementePDak"
        },

        text: {
            fontSize: '16px', 
            color: '#0C180E', 
            fontFamily: 'ClementePDae',
            textAlign: 'center'
        }
    };
    return (
        <div>
        {imageLeft ? (
            <div className = {style.container}>
            <img className = {style.image} src = {props.imagePath}/>
            <div className = {style.smallContainer}>
                <p style = {contentStyles.heading}>
                    {props.heading}
                </p>
                <p style = {contentStyles.text}> 
                    {props.text}
                </p>
                <Button text = {props.buttonText1} url = {props.url1}/>
                <Spacer height = {1}/>
                <Button text = {props.buttonText2} url = {props.url2}/>
            </div>
        </div>
        ) : (
            <div className = {style.container}>
                <div className = {style.smallContainer}>
                    <p style = {contentStyles.heading}>
                        {props.heading}
                    </p>
                    <p style = {contentStyles.text}> 
                        {props.text}
                    </p>
                    <Button text = {props.buttonText} url = {props.url1}/>
                    <Spacer height = {1}/>
                    <Button text = {props.buttonText2} url = {props.url2}/>
                </div>
                <img className = {style.image} src = {props.imagePath}/>
            </div>
        )}
        </div>
    )
};

export default ContentComponent;
