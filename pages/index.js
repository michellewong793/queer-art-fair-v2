import Layout from "../components/Layout";
import Styles from "../components/Theme";
import Spacer from "../components/Spacer";

export default function Index() {
  return (
    <div style={Styles.body}>
      <Layout />
      <div style={Styles.content}>
        <h1> 😱 omg.. did you hear about Queer Art Faire?</h1>
        <p>an inclusive community of artists, makers, and vendors in San Francisco? ✨</p>
        <p>people who have not had experience or space for vending before will be prioritized.</p>

        <img src="/QueerArtFaireSF.jpg" style={Styles.posterImage}/>


        <h3>Share your craft and meet local artists at our first event of 2023 on Saturday, 3/11/2023 </h3>
        <h3> Location: 1417 15th St, San Francisco, CA 94103 </h3>
        <h3> Time: 11am - 4pm </h3>

        <br/>
        <a style={Styles.link} href="/march-11-vendors"> Spring Vendor Roster 😍 </a>

        <p><a style={Styles.link}href="https://www.eventbrite.com/e/2023-queer-art-faire-tickets-499055427217?aff=efbneb">Get Tickets 🥳</a></p>
        <br/> 

        <h4>Event Details</h4>

        <p><b>COVID Policy: </b>Please stay at home if you are experiencing COVID-19 symptoms. Please be up to date on vaccinations and boosters. Masks are encouraged, but the venue will have good ventilation, and doors will be open. Attendees will be required to sign a waiver on the day of the event.</p>
        <p><b>Pet Policy: </b>Dogs are allowed at the venue, as long as they are good with crowds.</p>
        <p><b>Accessibility: </b>The venue is wheelchair accessible and has bathrooms.</p>


        <br/>


        <p>To keep Queer Art Faire an accessible event by being free for attendees and vendors, we ask for a <b>$5-$15</b> sliding scale donation for vendors and attendees on the day of the event. If you'd like to donate in advance, you can do so on the link below! Thank you so much for supporting our mission to bring inclusive spaces for art and creativity in the SF Bay Area. </p>

        <a style={Styles.link} href="https://www.gofundme.com/f/queer-art-faire?utm_source=facebook&utm_medium=social&utm_campaign=p_cf%20share-flow-1&fbclid=IwAR2AgoudjzRzqhv20nRF1eQuLQjybLwB8aQxPMbORKvZZnJOCf2pTpFBTNQ"
        >Donate to Queer Art Faire here 💖</a>
        
        <p></p>
        <hr/>
    
       
        <h2> (Accepting Vendors) Summer Fair: June 17, 2023</h2>
        <p> Location: Sports Basement Presidio </p>

        <hr/>

        <h2> (Accepting Vendors) Fall Fair: September 16, 2023</h2>
        <p> Location: Sports Basement Presidio </p>
        <hr/>
        <h2> (Accepting Vendors) Winter Fair: December 2, 2023</h2>
        <p> Location: Sports Basement Presidio </p>


        <hr/>



        <Spacer height={2} />
        <h1>Apply to be a vendor!</h1> 
      <p> Send a short description of your offering, a biography, and a link to your social platforms, including Instagram, Etsy, or personal website to <a href="mailto:m@ourquest.xyz"> michellurito@gmail.com. </a></p>
      <p> If you don't have a personal website, please message us about opportunities in which the team can help you with building one. </p>
      
      </div>
    </div>
  );
}
