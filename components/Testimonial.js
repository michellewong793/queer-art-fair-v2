import Styles from './Testimonial.module.css'
const Testimonial = (Props) => {

    return (
        <div className={Styles.textContainer}>
            <p>"{Props.testimonial}"</p>
        </div>
    )
}

export default Testimonial;