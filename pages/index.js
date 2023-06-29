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
import Event from "../components/Event";


export default function Index() {
  return (
      <div className={HomeStyles.body} style={Styles.body}>
        <HeaderDecoration />
        <Logo />
        <Subheader />
        <Navigation />
        <div className={HomeStyles.content}>
          <div className = {HomeStyles.nextContainer}>
            <Strawberry heading='NEXT' showMediumStrawberry = {'none'}/>
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
              hoverBackgroundColor="#489056"
              hoverTextColor="white"
              url="https://docs.google.com/forms/d/e/1FAIpQLSePS8SsNjo6JF0JvOVwPIYPIv-cc8VCp2ZLEC2u5cIkPKNodA/viewform"
              />
            </div>
          </div>
          
          <div className = {HomeStyles.upcomingContainer}>
            <Strawberry heading='UPCOMING' showLargeStrawberry='none'/>
            <div className = {HomeStyles.smallEventsContainer}>
              <Event className = {HomeStyles.centerFlexChild} name="Lakeside Landing" info="July 8, 2023"/>
              <img className = {HomeStyles.upcomingOrange} src='./puffyOrange.svg'></img>
              <Event className = {HomeStyles.centerFlexChild} name="Fall Faire" info={'Sept 16, 2023'}/>
              <img className = {HomeStyles.upcomingOrange} src='./puffyOrange.svg'></img>
              <Event className = {HomeStyles.centerFlexChild} name="Winter Faire" info={'Dec 2, 2023'}/>
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
          
        </div>
        <Footer />
      </div>
  );
              }
          