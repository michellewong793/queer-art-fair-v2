import CSS from 'csstype'
import Styles from './Button.module.css'

interface ButtonProps {
    text?: string;
    textColor?: string;
    backgroundColor?: string;
    borderColor?: string;
}

function Button({
    text = 'Button Text', 
    textColor = 'white',
    backgroundColor = 'black', 
    borderColor = backgroundColor
    }: ButtonProps) {
        
    const ButtonStyles: CSS.Properties = {
        color: textColor,
    
        backgroundColor: backgroundColor,
        border: '2px solid ' + borderColor,
    };

    return (
        <button style = {ButtonStyles} className = {Styles.button} >
            {text}
        </button>
    ) 
}

export default Button;