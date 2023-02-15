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

const Header = () => (
  <div style={header}>
    <a style={linkStyle} href="/">
      {" "}
      Home{" "}
    </a>
    <a style={linkStyle} href="/march-11-vendors">
      {" "}
      Spring Vendors{" "}
    </a>
  </div>
);

const Layout = () => {
  return (
    <>
      {" "}
      <Header />
      
       <Footer />
    </>
  );
};

const Footer = () => (
  <div style={footer}>
    <a href="https://www.instagram.com/queerartfairsf"> instagram </a>
  </div>
);

export default Layout;
