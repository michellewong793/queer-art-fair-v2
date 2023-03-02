import Layout from "../components/Layout";
import Styles from "../components/Theme";
import Spacer from "../components/Spacer";

export default function Index() {
  return (
    <div>
      <Layout />
      <div style={Styles.content}>
        <h1> Featured Vendor: 
        <a href="https://instagram.com/fka.gaia"> fka.gaia </a> </h1>
        <h3>Biography</h3>
        <p> 
        Gaia is a nonbinary, multi-ethnic Bay Area native, now currently residing in Berkeley, CA. Since 2021, they’ve stepped fully into their passion as a creative director, artist, writer, and community organizer, and now work as a full-time artist. They’ve shown art in galleries such as Babylon Burning Press, Hella Positive Gallery, Omni Commons, WeTheCollected Gallery, Good Mother Gallery, and more. In their shop, they offer unique and colorful prints featuring their signature character, CATBOY, as well as other whimsical pieces. They also offer a variety of handmade jewelry, hand-sculpted dishes, vases, and ashtrays, and other fun surprises. 

</p>

        <Spacer height={2} />
        <a href="/march-11-vendors"> Back to Vendor List </a>
      <p>apply to be a vendor: <a href="mailto:m@ourquest.xyz"> michellurito@gmail.com </a></p>
      
      
      </div>
    </div>
  );
}
