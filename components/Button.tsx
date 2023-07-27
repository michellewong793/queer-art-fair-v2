'use client'

import { useRouter } from "next/navigation";
import { useState } from "react";
import CSS from 'csstype'
import styles from './Button.module.css'

type ButtonProps = {
    name?,
    className?,

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
    name = text,
    textColor = 'white',
    backgroundColor = '#002809', 
    borderColor = backgroundColor,
    width,

    url,
    onClick,

}) => {
    const router = useRouter()
    const [isHovered, setIsHovered] = useState(false);
    const handleMouseEnter = () => {
        setIsHovered(true);
    };
    const handleMouseLeave = () => {
        setIsHovered(false);
    }

    const handleOnClick = (event) => {
        if (typeof onClick === "function") {
            onClick({
                value: event.target.value
            })
        } else if (url) {
            router.push(url)
        }
    }

    const buttonStyle: CSS.Properties = {
        backgroundColor: backgroundColor,
        color: textColor,
        border: '2px solid' + borderColor,
    }

    if (width) {
        buttonStyle.width = width;
    }

    return (
        <button style={buttonStyle}
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