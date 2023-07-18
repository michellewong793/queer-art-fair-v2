import style from './collection.module.css';
import supabaseClient from './supabaseClient';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

const Collection = (props) => {
    let collectionStyles = {
        image: {
            backgroundImage: props.image,
            backgroundRepeat: 'no-repeat', 
            backgroundSize: 'auto 200px',
            border: 'none',
            backgroundColor: '#E2F5F6',
            backgroundPosition: 'center center',  
        }
    };
    return (
        <div className = {style.container}>
            <div style = {collectionStyles.image} className = {style.image}></div>
            <div className = {style.text}>{props.text}</div>
        </div>
    );
};

export default Collection;