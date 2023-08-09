'use client'

import { useState } from "react";
import CSS from 'csstype'
import styles from './Button.module.css'
import Link from "next/link";

type ButtonProps = {
    name?,
    className?,
    type?,

    text?: string;
    textColor?: string;
    backgroundColor?: string;
    borderColor?: string;
    width?: string;

    url?: string;
    onClick?
}

const Button: React.FC<ButtonProps> = ({
    className,
    text = 'Button Text', 
    type = 'button',
    name = text,
    textColor = 'white',
    backgroundColor = '#002809', 
    borderColor = backgroundColor,
    width,

    url,
    onClick,

}) => {
    const [isHovered, setIsHovered] = useState(false);
    const handleMouseEnter = () => {
        setIsHovered(true);
    };
    const handleMouseLeave = () => {
        setIsHovered(false);
    }

    const buttonStyle: CSS.Properties = {
        backgroundColor: backgroundColor,
        color: textColor,
        border: '2px solid' + borderColor,
    }

    if (width) {
        buttonStyle.width = width;
    }

    if (url) return (
        <Link href={url}
            style={buttonStyle}
            className={styles.button + ' ' + styles.link + ' ' + className}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave} >
            {text}
        </Link>
    )

    const handleOnClick = (event) => {
        if (typeof onClick === "function") {
            onClick({
                value: event.target.value
            })
        }
    }
    
    return (
        <button style={buttonStyle}
            type={type}
            name={name}
            className={styles.button + ' ' + className}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleOnClick}>
                {text}
        </button>
    )
}

export default Button;