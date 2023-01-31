import Layout from "../components/Layout";
import Styles from "../components/Theme";
import Spacer from "../components/Spacer";

export default function Index() {
  return (
    <div>
      <Layout />
      <div style={Styles.content}>
        <h1> Queer Art Faire 2023 Schedule</h1>
        <h2>Spring Fair: March 11, 2023</h2>
        <a href="/march-11-vendors"> Spring Fair Vendor List </a>
        <p><a href="https://www.eventbrite.com/e/2023-queer-art-faire-tickets-499055427217?aff=efbneb">Tickets to Event</a></p>
        <p> Location: Sports Basement Stonestown </p>
        <h2> Summer Fair: June 17, 2023</h2>
        <p> Location: Sports Basement Presidio </p>
        <h2> Summer Fair: June 17, 2023</h2>
        <p> Location: Sports Basement Presidio </p>

        <h2> Fall Fair: September 16, 2023</h2>
        <p> Location: Sports Basement Presidio </p>



        <Spacer height={2} />
      <p>apply to be a vendor: <a href="mailto:m@ourquest.xyz"> michellurito@gmail.com </a></p>
      
      
      </div>
    </div>
  );
}
