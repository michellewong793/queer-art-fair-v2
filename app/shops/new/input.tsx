import React from "react";
import styles from './input.module.css'
import Button from "../../../components/Button";

//TODO: Fix id/eventlistener issue

type InputProps = {
    id?,
    className?,
    type?: string;
    placeholder?: string;
    value?: string;
    min?: number;
    max?: number;
    step?: number;

    error?: string;

    onChange?;
}

const Input: React.FC<InputProps> = ({
    id,
    className,
    type,
    placeholder,
    value,
    min,
    max,
    step,
    error,
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
                const textarea = (
                    <textarea 
                        id={id || "textarea"}
                        className={styles.input} 
                        {...fieldProps} /> 
                );
                // (textarea as unknown as HTMLTextAreaElement).addEventListener("input", function(e){
                //     this.style.height = "auto";
                //     this.style.height = this.scrollHeight + "px";
                // })

                return (
                    <div className={styles.border}>
                    {textarea}
                    </div>
                )
            case 'number':
                return (
                    <div className={styles.border}>
                    <input className={styles.input}
                        type='number'
                        min={min}
                        max={max}
                        step={step}
                        {...fieldProps} />
                    </div>
                )
            case 'submit':
                return (
                    <Button
                        text={value}
                    />
                )
            default:
                return (
                    <div className={styles.border}>
                    <input className={styles.input} {...fieldProps} />
                    </div>
                )
        }
      }

    return (
        <>
        <div className={[className, error && styles.inputError].join(" ")}>
            {inputSwitch()}
            {error && <p className={styles.errorText}>{error}</p>}
        </div>
        </>
    );
}

export default Input;