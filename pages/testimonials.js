import Navigation from "../components/Navigation";
import Strawberry from "../components/Strawberry";
import Testimonial from "../components/Testimonial";
import Quotes from "../components/Testimonials";
import Footer from "../components/Footer";
import TestimonialStyles from "../components/Testimonials.module.css"
import Styles from "../components/theme.js"
import Logo from "../components/Logo";
import Subheader from "../components/Subheader";
import HeaderDecoration from "../components/HeaderDecoration";

export default function Testimonials() {
    return (
        <div className={TestimonialStyles.body} style={Styles.body}>
            <HeaderDecoration />
            <Logo />
            <Subheader />
            <Navigation />
            <Strawberry heading={"TESTIMONIALS"} showStrawberry2={'none'} />
            {Quotes.map((quote) => (
                <Testimonial
                testimonial={quote.testimonial}
                source={quote.source}
                />
            ))}
            <Footer />
        </div>
    )
}