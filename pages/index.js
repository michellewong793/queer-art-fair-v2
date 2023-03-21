import Layout from "../components/Layout";
import Styles from "../components/Theme";
import Spacer from "../components/Spacer";

export default function Index() {
  return (
    <div style={Styles.body}>
      <Layout />
      <div style={Styles.content}>
        <h1> 😱 What is Queer Art Faire? </h1>
        <p>We are a community of artists, makers and vendors hosting inclusive and accessible art and maker fairs in San Francisco.
          </p>


        <Spacer height={2}/>
        <h2>Hell yea! When is the next event?</h2>
        <h3> June 17th, 2023</h3>
        <p> <strong>What will be there?</strong> 30+ artists, makers, bakers, coffee makers, flash tattooists, photobooth, and more!</p>
        <p> <strong>Location:</strong> Pebble Bed 1417 15th Street San Francisco, CA </p>
        <p> <strong>Time:</strong> 1pm - 6pm </p>
        <p>Admission is free at the door before 2pm or with RSVP, $5 after 2pm</p>
        <a href="https://www.eventbrite.com/e/2023-queer-art-faire-registration-590457001787">Get your free ticket here</a>
        <Spacer height={1}/>
        <i><p><b>COVID Policy: </b>Please stay at home if you are experiencing COVID-19 symptoms. Please be up to date on vaccinations and boosters. Masks are encouraged, but the venue will have good ventilation, and doors will be open. Attendees will be required to sign a waiver on the day of the event.</p>
        <p><b>Pet Policy: </b>Dogs are allowed at the venue, as long as they are good with crowds.</p>
        <p><b>Accessibility: </b>The venue is wheelchair accessible and has gender-neutral bathrooms.</p></i>


      <Spacer height={2}/>
      <h2>How can I support Queer Art Faire?</h2>
        <p>If you want to support our mission to provide accessible and inclusive art fairs for all in San Francisco, please feel free to donate more below to help us cover the costs of making QAF happen. Our hearts will be very warm. We are in the process of filing for 501c3 status.</p>
        <p>We are also looking for volunteer DJs, social media managers, day-of setup and tabling assistants. If you are interested, please get in touch <a href="mailto:michellurito@gmail.com">here.</a></p>
       <Spacer height={1}/>
         <a style={Styles.link} href="https://www.gofundme.com/f/queer-art-faire?utm_source=facebook&utm_medium=social&utm_campaign=p_cf%20share-flow-1&fbclid=IwAR2AgoudjzRzqhv20nRF1eQuLQjybLwB8aQxPMbORKvZZnJOCf2pTpFBTNQ"
        >Our GoFundMe 💖</a>
        <p> Venmo: @queerartfair</p>
        <br/>
        <br/>
       
      <br/>
      <h2>Apply to share your art / craft / creative passion!</h2>
        <h3> <a href="https://forms.gle/Ada3uBFQoxUJk1ka7">Fill out an application here!</a> </h3>
        <p>Our upcoming event on June 17 is currently accepting applications. We welcome artists of all trades. We will have a $5 early bird vendor fee if you apply before April 17. After April 17, the vendor fee will increase to $15.</p>



  
    
     <br/>
        <p> The following dates are also accepting vendors. Please email us with the date you are interested in and your offerings <a href="mailto:michellurito@gmail.com">here</a> to express your interest.</p>

        <h4> (Open to applications, apply by 8/16) Fall 4 Us Autumn Fair: September 16, 2023</h4>
        <h4> (Open to applications, apply by 11/2) Holigay Winter Fair: December 2, 2023</h4>

        
        
      </div>
    </div>
  );
}
