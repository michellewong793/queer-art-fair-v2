import Styles from '../components/Theme.js';
import Spacer from "../components/Spacer";
import Navigation from "../components/Navigation";
import Strawberry from "../components/Strawberry";
import HeaderDecoration from "../components/HeaderDecoration";
import Logo from "../components/Logo";
import Subheader from "../components/Subheader";
import pageStyles from "../components/pages.module.css";
import Footer from "../components/Footer";
import Search from '../components/Search';

export default function SearchPage() {
    return (
        <div className = {pageStyles.galleryBody} style = {Styles.body}>
            <HeaderDecoration />
            <Logo />
            <Subheader />
            <Navigation />
            <Strawberry heading = {"SEARCH"} showLargeStrawberry = {"none"}/>
            <Spacer height = {2}/>
            <Search/>
            <Footer />
        </div>
    );
}