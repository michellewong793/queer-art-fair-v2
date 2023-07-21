import React from "react";
import styles from './input.module.css'

type InputProps = {
    className?,
    type?: string;
    placeholder?: string;
    value?: string;
    min?: number;
    max?: number;
    step?: number;

    onChange?;
}

const Input: React.FC<InputProps> = ({
    className,
    type,
    placeholder,
    value,
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

    const textarea = document.getElementById("textarea");
    textarea?.addEventListener("input", function (e){
        this.style.height = "auto";
        this.style.height = this.scrollHeight + "px";
    });

    function inputSwitch() {
        switch(type) {
            case 'textarea':
                return (
                    <textarea 
                        id="textarea"
                        className={styles.input} 
                        {...fieldProps} /> 
                )
            case 'number':
                return (
                    <input className={styles.input}
                        type='number'
                        min={min}
                        max={max}
                        step={step}
                        {...fieldProps} />
                )
            case 'submit':
                return (
                    <input className={styles.submit}
                        type='submit'
                        value={value}
                    />
                )
            default:
                return (
                    <input className={styles.input} {...fieldProps} />
                )
        }
      }

    return (
        <>
        <div className={className}>
            <div className={styles.border}>
                {inputSwitch()}
            </div>
        </div>
        </>
    );
}

export default Input;