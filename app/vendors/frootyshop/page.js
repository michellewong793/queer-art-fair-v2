import Layout from "../../../components/Layout";
import Styles from "../../../components/Theme";
import Spacer from "../../../components/Spacer";

export default function Index() {
  return (
    <div>
      <Layout />
      <div style={Styles.content}>
        <h1> Featured Vendor: 
        frootyshop </h1>
        <h2>Biography</h2>
        <p> <a href="https://instagram.com/frootshop">frootyshop</a>was started by Erika, a Queer Latinx artist as a way to raise funds for a family member last year, she first started vending at @Quartzoakland but has now made her way into different community events! 

As a natural Pisces sun and moon, Erika makes art from the heart by feeling out the colors, patterns and pieces she uses and letting her intuition be the guide. Every piece she creates carries personal meaning and intention, and she is grateful to be able to share some of that love with the folks come by and support her shop. xoxo</p>
        <hr/>

        <Spacer height={2} />
        <a href="/march-11-vendors"> Back to Vendor List </a>

      <p>apply to be a vendor: <a href="mailto:m@ourquest.xyz"> michellurito@gmail.com </a></p>
      
      
      </div>
    </div>
  );
}
