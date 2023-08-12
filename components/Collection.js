import style from './collection.module.css';

const Collection = (props) => {
    let collectionStyles = {
        image: {
            backgroundImage: props.image,
            backgroundRepeat: 'no-repeat', 
            backgroundSize: 'auto 150px',
            border: 'none',
            backgroundColor: '#E2F5F6',
            backgroundPosition: 'center center',  
        }
    };
    return (
        <button type='button' className = {style.container} onClick={() => props?.getItems()}>
            <div style = {collectionStyles.image} className = {style.image}></div>
            <div className = {style.text}>{props.text}</div>
        </button>
    );
};

export default Collection;