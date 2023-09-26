import EventStyles from "./Event.module.css"

const Event = (Props) => {
    return (
        <div className = {EventStyles.container}>
            <h3 className = {EventStyles.title}>{Props.name}</h3>
            <p className = {EventStyles.info}>{Props.info}</p>
            <p className = {EventStyles.details}> {Props.details} </p>
        </div>
    )
}

export default Event;