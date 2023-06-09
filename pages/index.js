import Layout from "../components/Layout";
import Styles from "../components/Theme";
import Spacer from "../components/Spacer";
import Navigation from "../components/Navigation";

export default function Index() {
  return (
      <div className={HomeStyles.body} style={Styles.body}>
        <HeaderDecoration />
        <div className={HomeStyles.content}>
          <Logo />
          <Subheader />
          <Navigation />
          <Strawberry heading='NEXT' showStrawberry2='none'/>
        <p>Our upcoming shows on May 13, May 14, and June 17 are filled. We can't wait to see you soon. </p> 
        <p>Our events on <strong>July 8</strong> at Lakeside Village (2500 Ocean Ave, San Francisco, CA 94127), September 16, and December 2 are accepting applications. </p>
        <br/>
            <h2> Queer Art Faire at Indigo Vintage </h2>
            <h3> May 13, May 14 11-7pm </h3>
        <p> Location: 1649 Haight St, San Francisco, CA 94117</p>
        <p> A 2-day event on Mother's Day weekend with 10+ vendors each day, live sax performance by saxreligious, raffle, tarot and oracle reading, bubble wands, and more!</p>
        <p> <a href="https://www.eventbrite.com/e/queer-art-faire-at-indigo-vintage-popup-tickets-615347680477">RSVP on Eventbrite </a></p>
        <br/>
        <h2> BIG Faire - June 17th at Pebble Bed </h2>
          <img style={Styles.posterImage} src="/June17Faire.jpg"/>
  
        <p> <strong>What will be there?</strong> 30+ artists, makers, bakers, coffee makers, flash tattooists, photobooth, and more!</p>
        <p> <strong>Location:</strong> Pebble Bed 1417 15th Street San Francisco, CA </p>
        <p> <strong>Time:</strong> 1pm - 6pm </p>
        <p>Admission is free, <strong>$5</strong> donation encouraged, <strong>please RSVP</strong> on Eventbrite!</p>
        <a href="https://www.eventbrite.com/e/2023-queer-art-faire-registration-590457001787">RSVP here</a>
        <Spacer height={1}/>
        <i><p><b>COVID Policy: </b>Please stay at home if you are experiencing COVID-19 symptoms. Please be up to date on vaccinations and boosters. Masks are encouraged, but the venue will have good ventilation, and doors will be open. Attendees will be required to sign a waiver on the day of the event.</p>
        <p><b>Pet Policy: </b>Dogs are allowed at the venue, as long as they are good with crowds.</p>
        <p><b>Accessibility: </b>The venue is wheelchair accessible and has gender-neutral bathrooms.</p></i>

    <br/>
        <Spacer height={2}/>
          <Strawberry heading='ABOUT' showStrawberry2='none'/>
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
