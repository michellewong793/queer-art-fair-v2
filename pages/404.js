import Styles from "../components/Theme";
import Layout from "../components/Layout";


export default function Custom404() {
    return (
      <div>
        <Layout />
        <div style={Styles.content}>
          <h1 style={Styles.header}>404</h1>
            <p style={Styles.body}>Hey! Looks like that link doesn't exist. </p>          
            <a href="/" style={Styles.link} >Take me home</a>          

        </div>
      </div>
    );
  }
  