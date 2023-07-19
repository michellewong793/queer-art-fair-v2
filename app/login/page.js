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
import pageStyles from "../../components/pages.module.css";
import Footer from "../../components/Footer";
import style from './login.module.css';

export default function Login() {
    const [email, setEmail] = useState();
    return(
        <>
        <HeaderDecoration />
        <Logo />
        <Subheader />
        <Navigation />
        <Strawberry heading = {"LOGIN"} showMediumStrawberry = {"none"}/>
        <Spacer height = {4}/>

        <div className = {style.container}>
            <button className = {style.signInGoogle} onClick={() => signInWithGoogle()}>
                <div className = {style.signInText}>
                    Sign in with Google
                </div>
            </button>
        </div>
        

        <br/>
        <input placeholder='email' onChange={(e) => setEmail(e.target.value)}></input>
        <button onClick={() => signInWithMagicLink({email: email})}>
            Sign in with magic link
        </button>
        
        <Footer />
        </>
        
    )
}