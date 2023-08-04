'use client'

import { useState } from 'react';
import styles from './ImageSlideshow.module.css'

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
            <button 
                className={styles.button+' '+styles.left} 
                onClick={()=>previousImage()
                }>
                <img src={'/LeftArrow.svg'} alt='View previous image'/>
            </button>   
            <img className={styles.image} src={imageUrls[slideIndex]}/>

            <button 
                className={styles.button+' '+styles.right} 
                onClick={()=>nextImage()}>
                <img src={'/RightArrow.svg'} alt='View next image'
                />
            </button>

            <div className={styles.dotContainer}>
                <div className={styles.button+' '+styles.dotBackdrop}>
                    {imageUrls.map((url, k) => {
                        let selected = slideIndex === k;
                        return (
                            <button key={k}
                                name={'Jump to image '+k}
                                className={styles.dot + (selected ? (' '+styles.selected) : '')} 
                                onClick={() => setSlideIndex(k)}></button>
                        )
                    })}
                </div>
            </div>
        </div>
        </>
    )
}