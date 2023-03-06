import Layout from "../components/Layout";
import Styles from "../components/Theme";
import Spacer from "../components/Spacer";

export default function About() {
  return (
    <div style={Styles.body}>
      <Layout />
      <div style={Styles.content}>
        <h1> About Queer Art Faire </h1>

        <p> Queer Art Faire was started in 2023 as a labor of love to bring an inclusive space for artists and makers to share, network, and sell their goods together, regardless of age, race, sex, gender, financial ability, craft ability and skill.</p>
        <p>We operate on a complete donation-based model - where vendors and attendees are not expected to pay a mandatory fee for attending, but rather are encouraged to pay what they can to contribute to the community. </p>
        <p>We are based in San Francisco Bay Area, but are looking to expand to different venues in the city. If you are interested in hosting Queer Art Faire, please reach out! </p>
        <p>We are always looking for awesome community builders to help run Queer Art Faire - if you are interested in volunteering or working with us, let us know! Send us a message with your name and what you would like to offer the community here: <a href="mailto:michellurito@gmail.com"> michellurito@gmail.com. </a> </p>

        <p>We are also always looking for feedback to make a more inclusive and accessible community - so if you have any feedback on what you would like to see, feel free to let us know in an <a href="mailto:michellurito@gmail.com">email. </a> </p>

        <Spacer height={2} />
        <h2>Apply to be a vendor!</h2> 
      <p> Send a short description of your offering, a biography, and a link to your social platforms, including Instagram, Etsy, or personal website to <a href="mailto:michellurito@gmail.com"> michellurito@gmail.com. </a></p>
      <p> If you don't have a personal website, please message us about opportunities in which the team can help you with building one. </p>
      <p> See you at an event soon! 😻</p>
      </div>
    </div>
  );
}
