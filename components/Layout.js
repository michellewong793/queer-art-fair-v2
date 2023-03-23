import Link from "next/link";
import Spacer from "./Spacer";

const linkStyle = {
  marginRight: 15,
  textDecoration: "none",
  color: "black",
};

const header = {
  position: "fixed",
  padding: "1rem",
  top: 0,
  left: 0,
  width: "100%",
  height: "1rem",
  backgroundColor: "#F7A8DF",
  color: "white",
};

const body= {
  fontFamily: 'poppins',
  margin: 0,
}

const footer = {
  position: "fixed",
  padding: "1rem",
  left: 0,
  bottom: 0,
  width: "100%",
  height: "1rem",
  backgroundColor: "#F7A8DF",
  color: "white",
  display: "flex",
  justifyContent: "center",
};

const instagramLogo = {
  width: "1rem",
  height: "1rem"
}

const Header = () => (
  <div style={header}>
    <a style={linkStyle} href="/">
      {" "}
      Home{" "}
    </a>
    <a style={linkStyle} href="/march-11-vendors">
      {" "}
      3.11.23{" "}
    </a>
    <a style={linkStyle} href="https://www.gofundme.com/f/queer-art-faire">
      {" "}
      Donate{" "}
    </a>
  </div>
);

const Layout = () => {
  return (
    <div style={body}>
      {" "}
      <Header />

       <Footer />
    </div>
  );
};

const Footer = () => (
  <div style={footer}>
    <a style={linkStyle} href="https://www.gofundme.com/f/queer-art-faire">
      {" "}
      Donate{" "}
    </a>
     <a style={linkStyle} href="/about">
      {" "}
      About Us{" "}
    </a>
  <a href="https://www.instagram.com/queerartfairsf"> <img style={instagramLogo} src="/instagram_logo.png"></img></a>
  </div>
);

export default Layout;
