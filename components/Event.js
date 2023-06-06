const Event = (Props) => {
    let centered = {
        textAlign: 'center',
    }

    return (
        <div>
            <h3 style = {centered}>{Props.name}</h3>
            <p style = {centered}>{Props.date}</p>
        </div>
    )
}

export default Event;