import Layout from "../components/Layout";
import Styles from "../components/Theme";
import Spacer from "../components/Spacer";

export default function Index() {
  return (
    <div style={Styles.body}>
      <Layout />
      <div style={Styles.content}>
        <h1> 😱 did you say.. Queer Art Faire?! </h1>
        <p>We are a community of artists, makers and vendors hosting fairs in San Francisco! ✨</p>

        <img src="/QueerArtFaireSF.jpg" style={Styles.posterImage}/>


        <h2>Apply to be a vendor! </h2>
        <p>Our upcoming event on June 17 is accepting applications.</p>
        <p> The $5 vendor fee helps us cover costs of organizing the event.</p>
        <p> Location: To Be Announced (San Francisco Location) </p>
        <p> Time: 1pm - 6pm </p>

        <h3> <a href="https://forms.gle/Ada3uBFQoxUJk1ka7">Take me to the application</a> </h3>



        <br/>

        <p><a style={Styles.link}href="https://www.eventbrite.com/e/2023-queer-art-faire-registration-590457001787?aff=ebdssbonlinesearch&_gl=1*txv8db*_up*MQ..&gclid=Cj0KCQjw2cWgBhDYARIsALggUhrWzWVaDRWb8d_xhvPbOs_gKwBQULjNI5zHg2N4Mc-3rSaasugAbKEaAuUsEALw_wcB">Register here 🥳</a></p>
        <br/> 

        <h4>Event Details</h4>

        <p><b>COVID Policy: </b>Please stay at home if you are experiencing COVID-19 symptoms. Please be up to date on vaccinations and boosters. Masks are encouraged, but the venue will have good ventilation, and doors will be open. Attendees will be required to sign a waiver on the day of the event.</p>
        <p><b>Pet Policy: </b>Dogs are allowed at the venue, as long as they are good with crowds.</p>
        <p><b>Accessibility: </b>The venue is wheelchair accessible and has gender-neutral bathrooms.</p>


        <br/>


     
        <p></p>
    
     <br/>
        <p> If you are interested in future dates, please email us <a href="mailto:michellurito@gmail.com">here</a> to express your interest.</p>

        <h2> (Accepting Vendors, Deadline to apply 8/16) Fall Fair: September 16, 2023</h2>
        <p> Location: Sports Basement Presidio </p>
        <hr/>
        <h2> (Accepting Vendors, Deadline to apply 11/2) Winter Fair: December 2, 2023</h2>
        <p> Location: Sports Basement Presidio </p>


        <hr/>



        <Spacer height={2} />
        <h1>Apply to be a vendor!</h1> 
        <a href="https://forms.gle/Ada3uBFQoxUJk1ka7">Application Form Here</a>

        <Spacer height={2} />

        <a style={Styles.link} href="https://www.gofundme.com/f/queer-art-faire?utm_source=facebook&utm_medium=social&utm_campaign=p_cf%20share-flow-1&fbclid=IwAR2AgoudjzRzqhv20nRF1eQuLQjybLwB8aQxPMbORKvZZnJOCf2pTpFBTNQ"
        >Donate to Queer Art Faire here 💖</a>
        
      </div>
    </div>
  );
}
