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
        <p>We are based in San Francisco Bay Area, but are looking to expand to different venues in the city. If you are interested in hosting Queer Art Faire, please reach out! </p>
        <p>We are always looking for awesome community builders to help run Queer Art Faire - if you are interested in volunteering or working with us, let us know! Send us a message with your name and what you would like to offer the community here: <a href="mailto:michellurito@gmail.com"> michellurito@gmail.com. </a> </p>

        <p>We are also always looking for ways to make a more inclusive and accessible community. If you have any feedback or suggestions, feel free to let us know in an <a href="mailto:michellurito@gmail.com">email. </a> </p>


      </div>
    </div>
  );
}
