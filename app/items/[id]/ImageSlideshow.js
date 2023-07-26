'use client'

import { useState } from 'react';
import styles from './ImageSlideshow.module.css'
import Button from '../../../components/Button';

export default function ImageSlideshow(props) {
    let imageUrls = props?.imageUrls
    const [slideIndex, setSlideIndex] = useState(0);

    function previousImage() {
        let previousIndex = (slideIndex+imageUrls.length - 1) % imageUrls.length;
        setSlideIndex(previousIndex);
    }

    function nextImage() {
        let nextIndex = (slideIndex+1) % imageUrls.length;
        setSlideIndex(nextIndex);
    }

    return (
        <>
        <div className={styles.slideContainer}>
            <button className={styles.button+' '+styles.left} onClick={()=>previousImage()}>
                <img src={'/LeftArrow.svg'}/>
            </button>   
            <img className={styles.image} src={imageUrls[slideIndex]}/>

            <button className={styles.button+' '+styles.right} onClick={()=>nextImage()}>
                <img src={'/RightArrow.svg'}/>
            </button>
        </div>
        </>
    )
}