import Layout from "../components/Layout";
import Styles from "../components/Theme";
import Spacer from "../components/Spacer";

export default function Index() {
  return (
    <div style={Styles.body}>
      <Layout />
      <div style={Styles.content}>
        <h1> 😱 What is Queer Art Faire? </h1>
        <p>We are a community hosting art fairs in San Francisco for <strong>marginalized</strong> folks who have not had a space to share their creations before. 
          We emphasize creating spaces for but not limited to people of color, queer community, people whose first language is not English, and people who have little to no experience vending or sharing their art. 
          We aim to create a welcoming environment for people who face imposter syndrome about sharing their art to begin their journeys. 
          We are a completely volunteer-run organization running on donations. If you want to support us, we will be offering collectible stickers at our fairs for all donations above $5 and we receive donations on Venmo: @queerartfair.
          </p>
            <h2> (Poster coming!) First Popup: Queer Art Faire at Indigo Vintage </h2>
            <h3> May 13, May 14 11-7pm </h3>
        <p> Location: 1649 Haight St, San Francisco, CA 94117</p>
        <p> A smaller event on Mother's Day weekend with 10+ vendors each day, popcorn machine, bubble wands, live saxophone by a queer Asian American artist, and more!</p>
        <p> <a href="https://www.eventbrite.com/e/queer-art-faire-at-indigo-vintage-popup-tickets-615347680477">RSVP on Eventbrite </a></p>
        <br/>
        <h2> Next BIG Event!!! June 17th at Pebble Bed </h2>
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
        <h2>How do I apply for the next one?</h2>
        <p>Our upcoming shows on May 13, May 14, and June 17 are filled. We can't wait to see you soon! </p> 


        <p>Our first outdoor event on <strong>July 8</strong> at Lakeside Village (2500 Ocean Ave, San Francisco, CA 94127) is accepting applications! </p>
        <p> To apply, please fill out this form by May 18th and we will get back to you in 3-5 business days. </p>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLScjt2uFiUzX6xM0pyN0UitxA00_ZM5AfUwjmG14lNBDbwsKIg/viewform">Fill out an application here</a>
        <Spacer height={2}/>
        <p> Our <strong>September 16th </strong> show is also available!</p>
        <p> If you'd like to apply for the big show on September 16th, please fill out this form below. </p>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfM0sX4uZdsIkG5CqWn_OSlMDEm65vbDt3RIzaFTG7Y50Gkww/viewform">Fill out an application for 9/16 here</a>

        <Spacer height={2}/>

        <p> We have one more show you can apply to. We know, we need a better way of receiving applications. Bear with us! </p>
        <h4> (Open to applications, apply by 11/2) Holigay Winter Fair: December 2, 2023</h4>


      


      <Spacer height={2}/>
      <h2>How can I support?</h2>
        <p>If you want to support our mission, you can volunteer or donate below to help us cover the costs of making QAF happen. Our hearts will be very warm. We are in the process of filing for 501c3 status.</p>
        <p>We are also looking for volunteer DJs, social media managers, day-of setup and tabling assistants. If you are interested, please get in touch <a href="mailto:michellurito@gmail.com">here.</a></p>
       <Spacer height={1}/>
         <a style={Styles.link} href="https://www.gofundme.com/f/queer-art-faire?utm_source=facebook&utm_medium=social&utm_campaign=p_cf%20share-flow-1&fbclid=IwAR2AgoudjzRzqhv20nRF1eQuLQjybLwB8aQxPMbORKvZZnJOCf2pTpFBTNQ"
        >Our GoFundMe 💖</a>
        <p> Venmo: @queerartfair</p>
        <br/>
        <br/>
       
      <br/>
    
  
    

        
        
      </div>
    </div>
  );
}
