import Layout from "../components/Layout";
import Styles from "../components/Theme";
import Navigation from "../components/Navigation";
import Strawberry from "../components/Strawberry";

export default function Events() {
  return (
    <div style={Styles.body}>
        <Navigation />
        <Strawberry imagePath = {"/strawberry2.png"} heading = {"PAST EVENTS"} height = {82} width = {184} />
    </div>
  );
}
