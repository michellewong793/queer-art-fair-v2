import Layout from "../components/Layout";
import Styles from "../components/Theme";
import Navigation from "../components/Navigation";
import Strawberry from "../components/Strawberry";
import ContentComponent from "../components/ContentComponent";
import Spacer from "../components/Spacer";
import pageStyles from '../components/pages.module.css';
import HeaderDecoration from "../components/HeaderDecoration";
import Logo from "../components/Logo";
import Subheader from "../components/Subheader";
import Footer from "../components/Footer";

export default function Events() {
  return (
    <div style={Styles.body} className = {pageStyles.eventsBody}>
        <HeaderDecoration />
        <Logo />
        <Subheader />
        <Navigation />
        <Strawberry heading = {"PAST EVENTS"} showLargeStrawberry = {'none'}/>
        <Spacer height = {5}/>
        <ContentComponent 
            imageLeft = {true} 
            imagePath = {'/poster.svg'}
            buttonText1 = {'See Photos'}
            buttonText2 = {'See Past Vendors'}
            url2 = {'localhost:3000/events/june-17-vendors'}
            heading = {'Queer Art Fair on June 17th'}
            text = {'This event was held at Pebble Bed and had over 30 vendors in attendance'}
        />
        <Footer />
    </div>
  );
}
