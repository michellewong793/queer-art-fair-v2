import Styles from "../../components/Theme";
import Navigation from "../../components/Navigation";
import Strawberry from "../../components/Strawberry";
import ContentComponent from "./ContentComponent";
import Spacer from "../../components/Spacer";
import pageStyles from '../../components/pages.module.css';
import HeaderDecoration from "../../components/HeaderDecoration";
import Logo from "../../components/Logo";
import Subheader from "../../components/Subheader";
import Footer from "../../components/Footer";
import NextEvent from "./NextEvent";

export default function Events() {
  return (
    <div style={Styles.body} className = {pageStyles.eventsBody}>
        <HeaderDecoration />
        <Logo />
        <Subheader />
        <Navigation />
        <Strawberry heading = {"NEXT"} showLargeStrawberry = {'none'}/>
        <Spacer height = {5}/>
        <NextEvent
          imageLeft = {true}
          imagePath = {'/july8poster.jpg'}
          buttonText1 = {"RSVP here"}
          url1 = {"https://www.eventbrite.com/e/queer-art-faire-at-lakeside-landing-tickets-634996761407?aff=ebdshpsearchautocomplete"}
          heading = {"July Queer Art Faire"}
          subheader = {"7.8.23 | 1-5pm | 2504 Ocean Ave San Francisco"}
          text1 = {"$5 suggested donation to Queer Art Faire"}
          text2 = {"Many local BIPOC and Queer artists selling theirs creations!"}
        />
        <Strawberry heading = {"PAST"} showLargeStrawberry = {'none'}/>
        <Spacer height = {5}/>
        <ContentComponent 
            imageLeft = {true} 
            imagePath = {'/poster.svg'}
            buttonText1 = {'Photos'}
            buttonText2 = {'Vendors'}
            url2 = {'/june-17-vendors'}
            heading = {'Summer Queer Art Faire'}
            subheader = {"6.17.23 | 1-6pm | 1417 15th st San Francisco"}
            text1 = {'30+ vendors selling crafts and creations'}
            text2 = {'art prints, ceramics, crystals, tattoos, jewelry, a polaroid booth, and more!'}
        />
        <Spacer height = {5}/>
        <ContentComponent 
            imageLeft = {true} 
            imagePath = {'/QueerArtFaireSF.jpg'}
            buttonText1 = {'Photos'}
            url1 = {"/march-11-gallery"}
            buttonText2 = {'Vendors'}
            url2 = {'/march-11-vendors'}
            heading = {'Spring Queer Art Faire'}
            subheader = {'3.11.23 | 11-4pm | 1417 15th st San Francisco'}
            text1 = {'30+ vendors selling crafts and creations'}
            text2 = {'art prints, ceramics, crystals, tattoos, jewelry, a polaroid booth, and more!'}
        />
        <Footer />
    </div>
  );
}