'use client'
import React from 'react'
import CSS from 'csstype'
import Styles from './Button.module.css'
import Link from 'next/link';
import { useState } from 'react';

type ButtonProps = {
    text?: string;
    textColor?: string;
    backgroundColor?: string;
    borderColor?: string;
    hoverBackgroundColor?: string;
    hoverTextColor?: string;
    hoverBorderColor?: string;
    width?: string;
    url?: string;
}

const Button: React.FC<ButtonProps> = ({
    text = 'Button Text', 
    textColor = 'white',
    backgroundColor = '#002809', 
    borderColor = backgroundColor,
    hoverBackgroundColor = 'white',
    hoverTextColor = '#002809',
    hoverBorderColor = hoverBackgroundColor,
    width,
    url = '/'
}) => {

    /**Determine when the user is hovering over the button */
    const [isHovered, setIsHovered] = useState(false);

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
        <Link href={url}>
            <button style={buttonStyle} 
            className={Styles.button}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            /*onClick={handleClick}*/>
                {text}
            </button>
        </Link>
    );
};

export default Button;