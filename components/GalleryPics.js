import style from "./gallery.module.css";
import {useState} from 'react';
import Spacer from './Spacer';

const GalleryPics = (props) => {
    
    const [showPic1, setShowPic1] = useState(false); 
    const [showPic2, setShowPic2] = useState(false);

    let styles = {
        button1: {
            backgroundImage: props.imagePath1,
            backgroundRepeat: 'no-repeat', 
            backgroundSize: 'auto 325px',
            border: 'none',
            backgroundColor: '#E2F5F6',
            backgroundPosition: 'center center',  
            marginLeft: '8px',
            marginRight: '8px',
        },

        button2: {
            backgroundImage: props.imagePath2,
            backgroundRepeat: 'no-repeat', 
            backgroundSize: 'auto 325px',
            border: 'none',
            backgroundColor: '#E2F5F6',
            backgroundPosition: 'center center',
            marginLeft: '8px',
            marginRight: '8px',
        }, 

        imageDiv1: {
            height: '600px',
            backgroundImage: props.imagePath1,
            backgroundRepeat: 'no-repeat', 
            backgroundSize: 'auto 500px',
            border: 'none',
            backgroundColor: '#E2F5F6',
            backgroundPosition: 'center center'
        },

        imageDiv2: {
            height: '600px',
            background: props.imagePath2,
            backgroundRepeat: 'no-repeat', 
            backgroundSize: 'auto 500px',
            border: 'none',
            backgroundColor: '#E2F5F6',
            backgroundPosition: 'center center'
        }
    }

    return (
        <div>
            <div style = {{display: showPic1 ? "block" : "none"}} >
                <div className = {style.imageDiv} style = {styles.imageDiv1} onClick = {() => setShowPic1(!showPic1)}></div>
            </div>
            
            <div style = {{display: showPic2 ? "block" : "none"}}>
                <div className = {style.imageDiv} style = {styles.imageDiv2} onClick = {() => setShowPic2(!showPic2)}></div>
            </div>

            <div className = {style.container}>
                <button className = {style.button} style = {styles.button1} onClick = {() => setShowPic1(!showPic1)}></button>
                <Spacer height = {2.5}/>
                <button className = {style.button} style = {styles.button2} onClick = {() => setShowPic2(!showPic2)}></button>
            </div>
            
        </div>
        
    )
};

export default GalleryPics;