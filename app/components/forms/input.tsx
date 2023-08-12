import React from "react";
import styles from './Input.module.css'
import Button from "../../../components/Button";
import TextareaAutosize from 'react-textarea-autosize';
import NewCard from "../NewCard";

//TODO: Fix id/eventlistener issue

type InputProps = {
    id?,
    className?,
    type?: string,
    placeholder?: string,
    value?: string,
    defaultValue?: string,
    min?: number,
    max?: number,
    step?: number,
    accept?: string,

    ariaLabel?: string,
    error?: string,
    disabled?,
    onChange?,
}

const Input: React.FC<InputProps> = ({
    id,
    className,
    type,
    placeholder,
    value,
    defaultValue,
    min,
    max,
    step,
    accept,
    ariaLabel,
    error,
    disabled,
    onChange,
}) => {
    

    const handleChange = (event) => {
        if (typeof onChange === "function") {
            onChange({
                value: event.target.value,
                files: event.target.files
            })
        }
    }

    const fieldProps = {
        id,
        placeholder,
        value,
        disabled,
        onChange: handleChange
    }
    
    function inputSwitch() {
        switch(type) {
            case 'textarea':
                return (
                    <div className={styles.border}>
                    <TextareaAutosize 
                        className={styles.input} 
                        defaultValue={defaultValue}
                        aria-label={ariaLabel}
                        {...fieldProps} /> 
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
                        aria-label={ariaLabel}
                        {...fieldProps} />
                    </div>
                )
            case 'file':
                return (
                    <>
                        <label className={styles.fileInputLabel}>
                            <NewCard className={styles.fileInputBorder}/>
                            <input 
                                className={styles.fileInput}
                                type='file'
                                accept={accept}
                                aria-label={ariaLabel}
                                {...fieldProps} />
                        </label>
                    </>
                )
            case 'submit':
                return (
                    <Button
                        type='submit'
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