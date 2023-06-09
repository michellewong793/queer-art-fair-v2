import {useRouter} from 'next/router';
import Link from 'next/link';
import style from './navigation.module.css';
import React, {useState} from 'react';

const Navigation = () => {

    const router = useRouter();
    const currentRoute = router.pathname;

    const [showNav, setShowNav] = useState(false);

    return (
        <div className = {style.bigContainer}> 
            <div className = {style.mobileContainer} style = {{display: showNav ? "flex" : "none"}}> 
                <a  href = "/" className = {currentRoute === '/' ? style.active : style.nonActive}>
                    ABOUT
                </a>
                <img className = {style.image} src = '/heart.png'/>
                <a  href = "/events" className = {currentRoute === '/events' ? style.active : style.nonActive}>
                    EVENTS
                </a>
                <img className = {style.image} src = '/heart.png'/>
                <a  className = {style.nonActive} href = "https://www.gofundme.com/f/queer-art-faire">
                    DONATE
                </a>
            </div>
            <button className = {style.button} onClick = {() => setShowNav(!showNav)}>
                <img className = {style.hamburger} src = "/hamburger.png"/>
            </button>

            <div className = {style.desktopContainer}> 
                <a  href = "/" className = {currentRoute === '/' ? style.active : style.nonActive}>
                    ABOUT
                </a>
                <img className = {style.image} src = '/heart.png'/>
                <a  href = "/events" className = {currentRoute === '/events' ? style.active : style.nonActive}>
                    EVENTS
                </a>
                <img className = {style.image} src = '/heart.png'/>
                <a  className = {style.nonActive} href = "https://www.gofundme.com/f/queer-art-faire">
                    DONATE
                </a>
            </div>
        </div>
    )

};

export default Navigation;