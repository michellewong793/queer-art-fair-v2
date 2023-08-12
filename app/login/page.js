'use client'

import signInWithGoogle from "./signInWithGoogle"
import signInWithMagicLink from "./signInWithMagicLink"
import { useState } from "react"
import Spacer from "../../components/Spacer";
import Navigation from "../../components/Navigation";
import Strawberry from "../../components/Strawberry";
import HeaderDecoration from "../../components/HeaderDecoration";
import Logo from "../../components/Logo";
import Subheader from "../../components/Subheader";
import Footer from "../../components/Footer";
import style from './login.module.css';
import Styles from "../../components/Theme";

export default function Login() {
    const [email, setEmail] = useState();
    return(
        <div style = {Styles.body} className = {style.bodyBackground}>
        <title>Login</title>
        <meta name = "description" content = "Login page for QAF"></meta>
        <HeaderDecoration />
        <Logo />
        <Subheader />
        <Navigation />
        <Spacer height = {3}/>
        <div className = {style.columnContainer}>
            <div className = {style.heading}>
                Login
            </div>
            <Spacer height = {3}/>
            <button className = {style.signInGoogle} onClick={() => signInWithGoogle()}>
                <img className = {style.googleLogo} src = {"../../googleLogo.svg"}/>
                <Spacer width = {1}/>
                <div className = {style.signInText}>
                    Sign in with Google
                </div>
            </button>
            <Spacer height = {2} />
            <div className = {style.bold}>OR</div>
            <Spacer height = {2}/>
            <input placeholder='Enter your email...' className = {style.enterEmail} onChange={(e) => setEmail(e.target.value)}></input>
            <Spacer height = {1}/>
            <button className = {style.emailSignIn} onClick={() => signInWithMagicLink({email: email})}>
                <div className = {style.signInText}>
                    Sign in with magic link
                </div>
            </button>
        </div>
        
        <Footer />
        </div>
        
    )
}