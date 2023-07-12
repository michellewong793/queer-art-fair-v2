'use client'

import style from './navigation.module.css';
import { usePathname } from 'next/navigation'

const Navigation = () => {

    const currentRoute = usePathname();

    return (
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
    )

};

export default Navigation;