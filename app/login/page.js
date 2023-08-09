'use client'

import signInWithGoogle from "./signInWithGoogle"
import signInWithMagicLink from "./signInWithMagicLink"
import { useState } from "react"

export default function Login() {
    const [email, setEmail] = useState();
    return(
        <>
        <h3>Login</h3>
        <button onClick={() => signInWithGoogle()}>Sign in with Google</button>

        <br/>
        <input placeholder='email' onChange={(e) => setEmail(e.target.value)}></input>
        <button onClick={() => signInWithMagicLink({email: email})}>
            Sign in with magic link
        </button>
        
        
        </>
        
    )
}