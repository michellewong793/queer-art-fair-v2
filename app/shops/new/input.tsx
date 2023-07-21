import React from "react";
import styles from './input.module.css'

type InputProps = {
    className?,
    type?: string;
    placeholder?: string;
    min?: number;
    max?: number;
    step?: number;

    onChange?;
}

const Input: React.FC<InputProps> = ({
    className,
    type,
    placeholder,
    min,
    max,
    step,
    onChange,
}) => {
    

    const handleChange = (event) => {
        if (typeof onChange === "function") {
            onChange({
                value: event.target.value
            })
        }
    }

    const fieldProps = {
        placeholder,
        onChange: handleChange
    }

    switch (type) {
        case "text":

        case "textarea":

        case "number":


    }

    const textarea = document.getElementById("textarea");
    textarea?.addEventListener("input", function (e){
        this.style.height = "auto";
        this.style.height = this.scrollHeight + "px";
    });

    return (
        <>
        <div className={className}>
            <div className={styles.border}>
                {type === "textarea" ? (
                    <textarea 
                        id="textarea"
                        className={styles.input} 
                        {...fieldProps} />
                ) : (
                    <input className={styles.input} {...fieldProps} />
                )}
                
            </div>
        </div>
        </>
    );
}

export default Input;