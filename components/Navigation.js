import {useRouter} from 'next/router';
import Link from 'next/link';
import activeStyle from './navigation.module.css';

const Navigation = () => {

    const router = useRouter();
    const currentRoute = router.pathname;

    let navigationStyles = {
        container: {
            display: 'flex',
            flexDirection: 'row', 
            justifyContent: 'center',
            paddingTop: 50,
            paddingLeft: '10%',
            paddingRight: '10%',
            marginLeft: 'auto',
            marginRight: 'auto',
        },

        image: {
            height: 36,
            width: 44, 
            marginLeft: 20,
            marginRight: 20
        },

        text: {
            fontSize: 30,
            fontFamily: "ClementePDae", 
            margin: 0, 
            color: '#113219', 
            textDecoration: 'none', 
            paddingBottom: 30, 
            textAlign: 'center'
        },

    };

    return (
        <div style={navigationStyles.container}> 
            <a style = {navigationStyles.text} href = "/" className = {currentRoute === '/' ? activeStyle.active : activeStyle.nonActive}>
                ABOUT
            </a>
            <img style = {navigationStyles.image} src = '/heart.png'/>
            <a style = {navigationStyles.text} href = "/events" className = {currentRoute === '/events' ? activeStyle.active : activeStyle.nonActive}>EVENTS</a>
            <img style = {navigationStyles.image} src = '/heart.png'/>
            <a style = {navigationStyles.text} href = "https://www.gofundme.com/f/queer-art-faire">DONATE</a>
        </div>
    )
};

export default Navigation;