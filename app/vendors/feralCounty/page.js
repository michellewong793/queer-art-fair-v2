import Layout from "../../../components/Layout";
import Styles from "../../../components/Theme";
import Spacer from "../../../components/Spacer";

export default function Index() {
  return (
    <div>
      <Layout />
      <div style={Styles.content}>
        <h1> Featured Vendor: 
        KRISTIE FLEMING </h1>
        <a href="https://feralcountyfurniture.etsy.com">Preorder Here</a> 
        <h3>Biography</h3>
        <p>Feral County Furnishings was founded in the midst of the Pandemic in 2020….converting her backyard into a work space, Kristie Fleming mastered the art of Shou Sugi Ban wood burning. This process preserves and protects the wood from rot, insects and the elements…But Kristie takes it those few vital steps further by actually staining the wood, then carving unique images into her pieces making this a truly custom made-to-order company.

        Kristie Fleming’s love of collaborating stems from a decade’s worth of editing TV shows in Los Angeles and being surrounded by similar creative talents.

        Feral County’s goal is to provide its clientele solid, show stopping pieces that are sure to invite conversation in any setting.

        As the company grows it is dedicated to providing a healthy, inclusive, respect based environment for all employees, in particular for those passed over in the larger job market…Women, POC, the LQBTQIA community as well as donating 5% of all profits to <a>https://www.nationalforests.org/get-involved/ways-to-give.</a></p>
        <hr/>

        <Spacer height={2} />
        <a href="/march-11-vendors"> Back to Vendor List </a>

      <p>apply to be a vendor: <a href="mailto:m@ourquest.xyz"> michellurito@gmail.com </a></p>
      
      
      </div>
    </div>
  );
}
