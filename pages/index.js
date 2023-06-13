import Styles from "../components/Theme";
import HomeStyles from "../components/Home.module.css";
import Logo from "../components/Logo";
import Subheader from "../components/Subheader"
import HeaderDecoration from "../components/HeaderDecoration";
import Button from "../components/Button"
import Footer from "../components/Footer"
import Strawberry from "../components/Strawberry"
import Navigation from "../components/Navigation"
import Testimonial from "../components/Testimonial";
import Quotes from "../components/TestimonialsList";


export default function Index() {
  return (
      <div className={HomeStyles.body} style={Styles.body}>
        <HeaderDecoration />
        <div className={HomeStyles.content}>
          <Logo />
          <Subheader />
          <Navigation />
          <Strawberry heading='NEXT' showMediumStrawberry = {'none'}/>

          <div className = {HomeStyles.nextContainer}>
            <img className = {HomeStyles.nextPoster} src='./June17FaireSquare.svg'></img>

            <div className = {HomeStyles.nextButtonContainer}>
              <Button className = {HomeStyles.nextButton} text="Get your tickets!"/>
              <img className = {HomeStyles.nextHeart} src='./heart.svg'></img>
              <Button className = {HomeStyles.nextButton} 
              text="Vendor Application" 
              backgroundColor="white" 
              textColor="#002809" 
              borderColor="#489056"
              hoverBackgroundColor="#489056"
              hoverTextColor="white"
              />
            </div>
          </div>
          

          {/* <div className = {HomeStyles.centerFlexParent}>
            <Event className = {HomeStyles.centerFlexChild} name="Winter Faire" date="12.1.23"/>
            <p className = {HomeStyles.centerFlexChild}>p</p>
            <Event className = {HomeStyles.centerFlexChild} name="Winter Faire" date="12.1.23"/>
            <p className = {HomeStyles.centerFlexChild}>p</p>
            <Event className = {HomeStyles.centerFlexChild} name="Winter Faire" date="12.1.23"/>
          </div> */}

          <Strawberry heading={"TESTIMONIALS"} showLargeStrawberry={'none'} />
          {Quotes.map((quote) => (
            <Testimonial
            key = {quote.testimonial}
            testimonial={quote.testimonial}
            source={quote.source}
            />
          ))}

          <Strawberry heading='ABOUT' showMediumStrawberry = {"none"}/>
          <div className = {HomeStyles.aboutContainer}>
            <img className = {HomeStyles.aboutImage} src='./PeachWithWater.svg'></img>
            <p className= {HomeStyles.aboutText}>
            We are a community hosting art fairs in San Francisco for marginalized and queer folks who have not had a space to share their creations before. 
            <br /> <br/>
            We are completely a volunteer-run organization running on donations. 
            <br/> <br/>
            If you want to support us, we will be offering collectible merch at our fairs, and we receive donations via Venmo! 
            <br/> <br/>
            Venmo: @queerartfair
            </p>
          </div>
          
        </div>
        <Footer />
      </div>
  );
}
