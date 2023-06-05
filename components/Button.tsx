import CSS from 'csstype'

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
        padding: '10px',
        textAlign: 'center',
    
        color: textColor,
    
        backgroundColor: backgroundColor,
        border: '2px solid ' + borderColor,
        borderRadius: '10px',
        
        cursor: 'pointer',
    };

    return (
        <button style = {ButtonStyles}>
            {text}
        </button>
    ) 
}

export default Button;