import Navigation from "../components/Navigation";
import Strawberry from "../components/Strawberry";
import Testimonial from "../components/Testimonial";
import Quotes from "../components/Testimonials";
import Footer from "../components/Footer";
import TestimonialStyles from "../components/Testimonials.module.css"
import Styles from "../components/theme.js"

export default function Testimonials() {
    return (
        <div className={TestimonialStyles.body} style={Styles.body}>
            <Navigation />
            <Strawberry heading={"Testimonials"} showStrawberry2={'none'} />
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