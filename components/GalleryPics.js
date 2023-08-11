'use client'

import style from "./gallery.module.css";
import {useState} from 'react';
import Spacer from './Spacer';
import Modal from "../app/components/Modal";

const GalleryPics = (props) => {
    
    const [showPic1, setShowPic1] = useState(false); 
    const [showPic2, setShowPic2] = useState(false);

    return (
        <div>

            <div className = {style.container}>
                <button aria-label='expand image' className = {style.button} onClick = {() => setShowPic1(true)}>
                    <img src={props.imagePath1} alt={props.alt1} className={style.image} loading="lazy"/>
                </button>
                <Spacer height = {2.5}/>
                { props?.imagePath2 &&
                    <button aria-label='expand image' className = {style.button}  onClick = {() => setShowPic2(true)}>
                        <img src={props.imagePath2} alt={props.alt2} className={style.image} loading="lazy"/>
                    </button>
                }
            </div>

            <Modal onRequestClose={() => setShowPic1(false)} isOpen={showPic1}>
                <img src={props.imagePath1} alt={props.alt1} className={style.image} loading="lazy"/>
            </Modal>

            <Modal onRequestClose={() => setShowPic2(false)} isOpen={showPic2}>
                <img src={props.imagePath2} alt={props.alt2} className={style.image} loading="lazy"/>
            </Modal>
            
        </div>
        
    )
};

export default GalleryPics;