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
import Event from "../components/Event"

export default function HomePage() {
    return (
      <div className={HomeStyles.body} style={Styles.body}>
      <HeaderDecoration />
      <Logo />
      <Subheader />
      <Navigation />
      <div className={HomeStyles.content}>
        <div className = {HomeStyles.nextContainer}>
          {/* <Strawberry heading='NEXT' showMediumStrawberry = {'none'}/>
          <img className = {HomeStyles.nextPoster} src='./QAF Poster July 8.png'></img>

          <div className = {HomeStyles.nextButtonContainer}>
            <Button className = {HomeStyles.nextButton} 
            text="Get your tickets!"
            url="https://www.eventbrite.com/e/queer-art-faire-at-lakeside-landing-tickets-634996761407?aff=oddtdtcreator"
            />
            <div className = {HomeStyles.nextHeartContainer} >
              <img className = {HomeStyles.nextHeart} src='./heart.svg'></img>
            </div>
            <Button className = {HomeStyles.nextButton} 
            text="General Vendor Application" 
            backgroundColor="white" 
            textColor="#002809" 
            borderColor="#489056"
            url="https://docs.google.com/forms/d/e/1FAIpQLSePS8SsNjo6JF0JvOVwPIYPIv-cc8VCp2ZLEC2u5cIkPKNodA/viewform"
            />
          </div> */}
        </div>
        
        <div className = {HomeStyles.upcomingContainer}>
          <Strawberry heading='UPCOMING' showLargeStrawberry='none'/>
          <div className = {HomeStyles.smallEventsContainer}>
            <Event className = {HomeStyles.centerFlexChild} name="Holiday Market" info={'Dec 2, 2023 and Dec 9, 2023'} details={'Details coming soon!'}/>
          </div>
        </div>
        

        <div className = {HomeStyles.testimonialsContainer}>
          <Strawberry heading={"TESTIMONIALS"} showLargeStrawberry={'none'} />
          <div className = {HomeStyles.testimonials}>
            {Quotes.map((quote) => (
              <Testimonial
              key = {quote.testimonial}
              testimonial={quote.testimonial}
              source={quote.source}
              />
            ))}
          </div>
          
        </div>
        
        <div className = {HomeStyles.aboutContainer}>
          <Strawberry heading='ABOUT' showMediumStrawberry = {"none"}/>
          <div className = {HomeStyles.aboutSubContainer}>
            <img className = {HomeStyles.aboutImage} src='./PeachWithWater.svg'></img>
            <p className= {HomeStyles.aboutText}>
            We are a community hosting art fairs in San Francisco for artists who have not had a space to share their creations before. 
            </p>
        </div>
          
        </div>
        
      </div>
      <Footer />
    </div>
    );
}