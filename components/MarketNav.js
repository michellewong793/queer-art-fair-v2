import {useRouter} from 'next/router';
import style from './navigation.module.css';
import React, {useState} from 'react';

const MarketNav = () => {

    const router = useRouter();
    const currentRoute = router.pathname;

    const [showMarketNav, setShowMarketNav] = useState(false);

    return (
            <div className = {style.desktopContainer}> 
                <img className = {style.image} src = '/heart.png'/>
                <a  href = "/" className = {currentRoute === '/' ? style.active : style.homeNonActive}>
                    HOME
                </a>
                <img className = {style.image} src = '/heart.png'/>
                <a  href = "/login" className = {currentRoute === '/login' ? style.active : style.nonActive}>
                    MY ACCOUNT
                </a>
                <img className = {style.image} src = '/heart.png'/>
            </div>
    )

};

export default MarketNav;