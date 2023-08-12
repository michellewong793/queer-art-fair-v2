'use client'
import { usePathname } from 'next/navigation'
import style from './navigation.module.css';

const MarketNav = () => {

    const currentRoute = usePathname();

    return (
            <div className = {style.desktopContainer}> 
                <img className = {style.image} src = '/heart.png' alt=''/>
                <a  href = "/" className = {currentRoute === '/' ? style.active : style.homeNonActive}>
                    HOME
                </a>
                <img className = {style.image} src = '/heart.png' alt=''/>
                <a  href = "/login" className = {currentRoute === '/login' ? style.active : style.nonActive}>
                    MY ACCOUNT
                </a>
                <img className = {style.image} src = '/heart.png' alt=''/>
            </div>
    )

};

export default MarketNav;