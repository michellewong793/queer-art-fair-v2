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
        width: '150px',
        padding: '12px',
        textAlign: 'center',
    
        color: textColor,
    
        backgroundColor: backgroundColor,
        border: '2px solid ' + borderColor,
        borderRadius: '10px',
        boxShadow: '-1px 2px 5px 0px rgba(0, 0, 0, 0.5)',
        
        cursor: 'pointer',
    };

    return (
        <button style = {ButtonStyles} className = {Styles.button} >
            {text}
        </button>
    ) 
}

export default Button;