'use client'
import Label from '../components/forms/label'
import Input from '../components/forms/input'
import styles from './PasswordProtection.module.css'
import { useState, useId } from 'react';

// props = password, unlockWithPassword
export default function PasswordProtection(props) {
    const [enteredPassword, setEnteredPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false)
    const [error, setError] = useState(null)
    const passwordId = useId()
    const checkId = useId()

    async function checkPassword(e) {
        e.preventDefault()
        if (enteredPassword === props?.password) {
            props?.unlockWithPassword()
        } else {
            setError('*Invalid password')
        }
    }

    return (
        <form onSubmit={(e) => checkPassword(e)}>
            <Label htmlFor={passwordId}>Enter the Queer Art Faire password to continue to login.</Label>
            <Input 
                id={passwordId}
                className={styles.input}
                type={showPassword ? 'text' : 'password'}
                placeholder={'Password'}
                value={enteredPassword || ''}
                error={error}
                onChange={(data) => setEnteredPassword(data.value)}
            />

            <div className={styles.showPasswordContainer}>
                <Input 
                    id={checkId} 
                    type="checkbox" 
                    className={styles.input}
                    onClick={() => setShowPassword(!showPassword)} 
                />
                <Label htmlFor={checkId}>Show password</Label>
            </div>

            <Input type='submit' value='Submit'/>
        </form>
    )
}