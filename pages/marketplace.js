import Styles from '../components/Theme.js';
import Spacer from "../components/Spacer.js";
import MarketNav from "../components/MarketNav.js";
import MarketHeaderDec from '../components/MarketHeaderDec.js';
import Logo from "../components/Logo.js";
import Subheader from "../components/Subheader.js";
import pageStyles from "../components/pages.module.css";
import Footer from "../components/Footer.js";
import Search from '../components/Search.js';

export default function Marketplace() {
    return (
        <div className = {pageStyles.galleryBody} style = {Styles.body}>
            <MarketHeaderDec />
            <Logo />
            <Subheader />
            <MarketNav />
            <Spacer height = {2}/>
            <Search/>
            <Footer />
        </div>
    );
}