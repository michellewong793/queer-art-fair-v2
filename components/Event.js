const Event = (Props) => {
    let styles = {
        centered: {
            textAlign: 'center',
        }
    }

    return (
        <div>
            <h3 style = {styles.centered}>{Props.name}</h3>
            <p style = {styles.centered}>{Props.date}</p>
        </div>
    )
}

export default Event;