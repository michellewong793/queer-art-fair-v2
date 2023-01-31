import Styles from "../components/Theme";
import Layout from "../components/Layout";
import Spacer from "../components/Spacer";
import Link from "next/link";

export default function Index() {
  return (
    <div>
      <Layout />
      <div style={Styles.content}>
        <h1 style={Styles.header}>Poems by Michelle Wong</h1>

        <h2> Cinders </h2>
        <p>
          My heart yearns for more
          <br></br>
          Some days it gets so loud that I can’t think about anything else
          <br></br>
          Some days I’m happy and calm
          <br></br>
          In the end, the trick is to stay calm and accept however I am feeling
          <br></br>
          The fire in me burns bright and can spark a forest fire in a second,
          but soft cinders will keep a room warm for days
          <br></br>
        </p>
        <Spacer height={3} />
        <h2> Binary </h2>
        <p>
          Be careful who you give your heart to
          <br></br>
          And if at all
          <br></br>
          The problem is though, that I love <strong>binary</strong>
          <br></br>
          which means if so, all, and if not, not at all
          <br></br>
          There is no between.
          <br></br>
          And if you asked me if I checked my code before I submitted, I'll say
          no.
          <br></br>
          Because I loved you without writing pseudocode, and I had no filter.
          <br></br>I let you pass through the process, no rejections, no
          ghosting, no screenings.
          <br></br>
          If you ask me if I loved you, I'll say yes.
          <br></br>
          And if you asked me how much, I'll say 1.
        </p>
      </div>
    </div>
  );
}
