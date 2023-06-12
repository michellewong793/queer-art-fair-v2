import Styles from './Testimonial.module.css'
const Testimonial = (Props) => {

    return (
        <div className={Styles.container}>
            <div className={Styles.textContainer}>
                <p>"<em>{Props.testimonial}</em>"</p>
                <p className={Styles.source}>-{Props.source}</p>
            </div>
        </div>
    )
}

export default Testimonial;