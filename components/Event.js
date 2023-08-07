import EventStyles from "./Event.module.css"

const Event = (Props) => {
    return (
        <div className = {EventStyles.container}>
            <h2 className = {EventStyles.title}>{Props.name}</h2>
            <p className = {EventStyles.info}>{Props.info}</p>
        </div>
    )
}

export default Event;