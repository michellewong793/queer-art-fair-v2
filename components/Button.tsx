import React from 'react'
import CSS from 'csstype'
import Styles from './Button.module.css'

type ButtonProps = {
    text?: string;
    textColor?: string;
    backgroundColor?: string;
    borderColor?: string;
    hoverBackgroundColor?: string;
    hoverTextColor?: string;
    hoverBorderColor?: string;
    width?: string;
}

const Button: React.FC<ButtonProps> = ({
    text = 'Button Text', 
    textColor = 'white',
    backgroundColor = 'black', 
    borderColor = backgroundColor,
    hoverBackgroundColor = 'white',
    hoverTextColor = 'black',
    hoverBorderColor = hoverBackgroundColor,
    width,
}) => {

    /**Determine when the user is hovering over the button */
    const [isHovered, setIsHovered] = React.useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    /**Set hover colors */
    const buttonStyle: CSS.Properties = {
        backgroundColor: isHovered ? hoverBackgroundColor : backgroundColor,
        color: isHovered ? hoverTextColor : textColor,
        border: '2px solid ' + (isHovered ? hoverBorderColor : borderColor)
    }

    /**Only specify width if it was passed as a prop */
    if (width) {
        buttonStyle.width = width;
    }

    return (
        <button style={buttonStyle} 
        className={Styles.button}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
            {text}
        </button>
    );
};

export default Button;