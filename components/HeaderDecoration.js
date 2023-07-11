'use client'

import { usePathname } from 'next/navigation'

import React, {useState} from 'react';
import style from "./navigation.module.css";
import headerStyle from "./headerDecoration.module.css";

const HeaderDecoration = (props) => {

    const currentRoute = usePathname();

    const [showNav, setShowNav] = useState(false);


    return (
        <div>
            <div className ={headerStyle.headerFill}>
                <button className = {style.button} onClick = {() => setShowNav(!showNav)}></button>
                <div className = {style.mobileContainer} style = {{display: showNav ? "flex" : "none"}}> 
                    <a  href = "/" className = {currentRoute === '/' ? style.active : style.nonActive}>
                        ABOUT
                    </a>
                    <a  href = "/events" className = {currentRoute === '/events' ? style.active : style.nonActive}>
                        EVENTS
                    </a>
                    <a  className = {style.nonActive} href = "https://www.gofundme.com/f/queer-art-faire">
                        DONATE
                    </a>
                </div>
                
            </div>
            <div className = {headerStyle.header}></div>
        </div>
    )
}

export default HeaderDecoration;