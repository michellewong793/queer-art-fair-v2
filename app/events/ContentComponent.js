import Button from "../../components/Button";
import style from "./contentComponent.module.css";
import Spacer from "../../components/Spacer"

const ContentComponent = (props) => {

    const imageLeft = props.imageLeft;

    let contentStyles = {

        heading: { 
            color: '#1A361E', 
            fontFamily: "ClementePDak"
        },

        text: { 
            color: '#0C180E', 
            fontFamily: 'Helvetica Light',
            textAlign: 'left'
        }
    };
    return (
        <div>
        {imageLeft ? (
            
                <div className = {style.container}>
                    <img className = {style.image} src = {props.imagePath} alt={props?.alt}/>
                    <Spacer width = {2}/>
                    <div className = {style.smallContainer}>
                        <h3 className = {style.heading} style = {contentStyles.heading}>
                            {props.heading}
                        </h3>
                        <p className = {style.subheading} >
                            {props.subheader}
                        </p>
                        <div className = {style.textContainer}>
                            <img className = {style.orange} src = {"/orange.svg"} alt='inflatable orange bullet point'/>
                            <p className = {style.text} style = {contentStyles.text}> 
                                {props.text1}
                            </p>
                        </div>
                        <div className = {style.textContainer}>
                            <img className = {style.orange} src = {"/orange.svg"} alt='inflatable orange bullet point'/>
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
            
        ) : (
            
                <div className = {style.container}>
                    <div className = {style.smallContainer}>
                        <h3 className = {style.heading} style = {contentStyles.heading}>
                            {props.heading}
                        </h3>
                        <p className = {style.subheading} >
                            {props.subheader}
                        </p>
                        <div className = {style.textContainer}>
                            <img className = {style.orange} src = {"/orange.svg"} alt='inflatable orange bullet point'/>
                            <p className = {style.text} style = {contentStyles.text}> 
                                {props.text1}
                            </p>
                        </div>
                        <div className = {style.textContainer}>
                            <img className = {style.orange} src = {"/orange.svg"} alt='inflatable orange bullet point'/>
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
                    <Spacer width = {2}/>
                    <img className = {style.image} src = {props.imagePath} alt={props?.alt}/>
                </div>
            
        )}
        </div>
    )
};

export default ContentComponent;
