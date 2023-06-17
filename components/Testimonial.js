import Styles from './Testimonial.module.css'
const Testimonial = (Props) => {

    return (
        <div className={Styles.textContainer}>
            <p>"{Props.testimonial}"</p>
            <p className={Styles.source}>-{Props.source}</p>
        </div>
    )
}

export default Testimonial;