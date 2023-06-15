import Button from "./Button";
import style from "./contentComponent.module.css";
import Spacer from "./Spacer"

const ContentComponent = (props) => {

    const imageLeft = props.imageLeft;

    let contentStyles = {

        heading: { 
            color: '#1A361E', 
            fontFamily: "ClementePDak"
        },

        text: { 
            color: '#0C180E', 
            fontFamily: 'ClementePDae',
            textAlign: 'left'
        }
    };
    return (
        <div>
        {imageLeft ? (
            <div className = {style.contentContainer}>
                <div className = {style.container}>
                    <img className = {style.image} src = {props.imagePath}/>
                    <div className = {style.smallContainer}>
                        <p className = {style.heading} style = {contentStyles.heading}>
                            {props.heading}
                        </p>
                        <p className = {style.text} style = {contentStyles.text}>
                            {props.subheader}
                        </p>
                        <div className = {style.textContainer}>
                            <img className = {style.orange} src = {"/orange.svg"}/>
                            <p className = {style.text} style = {contentStyles.text}> 
                                {props.text1}
                            </p>
                        </div>
                        <div className = {style.textContainer}>
                            <img className = {style.orange} src = {"/orange.svg"}/>
                            <p className = {style.text} style = {contentStyles.text}> 
                                {props.text2}
                            </p>
                        </div>
                        <Spacer height = {1.5}/>
                        <div className = {style.buttonContainer}>
                            <Button text = {props.buttonText1} url = {props.url1}/>
                            <Spacer width = {3}/>
                            <Spacer height = {1}/>
                            <Button text = {props.buttonText2} url = {props.url2}/>
                        </div>
                    </div>
                </div>
            </div>
        ) : (
            <div className = {style.contentContainer}>
                <div className = {style.container}>
                    <div className = {style.smallContainer}>
                        <p className = {style.heading} style = {contentStyles.heading}>
                            {props.heading}
                        </p>
                        <p className = {style.text} style = {contentStyles.text}>
                            {props.subheader}
                        </p>
                        <div className = {style.textContainer}>
                            <img className = {style.orange} src = {"/orange.svg"}/>
                            <p className = {style.text} style = {contentStyles.text}> 
                                {props.text1}
                            </p>
                        </div>
                        <div className = {style.textContainer}>
                            <img className = {style.orange} src = {"/orange.svg"}/>
                            <p className = {style.text} style = {contentStyles.text}> 
                                {props.text2}
                            </p>
                        </div>
                        <Spacer height = {1.5}/>
                        <div className = {style.buttonContainer}>
                            <Button text = {props.buttonText1} url = {props.url1}/>
                            <Spacer width = {3}/>
                            <Spacer height = {1}/>
                            <Button text = {props.buttonText2} url = {props.url2}/>
                        </div>
                    </div>
                    <img className = {style.image} src = {props.imagePath}/>
                </div>
            </div>
        )}
        </div>
    )
};

export default ContentComponent;
