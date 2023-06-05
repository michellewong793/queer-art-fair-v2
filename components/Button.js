const Button = (props) => {
    let ButtonStyles = {
        width: '150px',
        padding: '10px',
        textAlign: 'center',

        color: 'black',

        backgroundColor: props.backgroundColor,
        border: '2px solid ' + props.borderColor,
        borderRadius: '10px',
        
        cursor: 'pointer',
    }

    return (
        <button style={ButtonStyles}>
            {props.text}
        </button>
    )
};

export default Button;