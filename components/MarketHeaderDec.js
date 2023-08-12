'use client'
import { usePathname } from 'next/navigation'
import React, {useState} from 'react';
import style from "./navigation.module.css";
import headerStyle from "./headerDecoration.module.css";

const MarketHeaderDec = (props) => {

    const currentRoute = usePathname();

    const [showNav, setShowNav] = useState(false);


    return (
        <div>
            <div className ={headerStyle.headerFill}>
                <button className = {style.button} onClick = {() => setShowNav(!showNav)}></button>
                <div className = {style.mobileContainer} style = {{display: showNav ? "flex" : "none"}}> 
                    <a  href = "/" className = {currentRoute === '/' ? style.active : style.nonActive}>
                        HOME
                    </a>
                    <a  href = "/login" className = {currentRoute === '/login' ? style.active : style.nonActive}>
                        MY ACCOUNT
                    </a>
                </div>
                
            </div>
            <div className = {headerStyle.header}></div>
        </div>
    )
}

export default MarketHeaderDec;