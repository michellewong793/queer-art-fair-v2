import Styles from '../../components/Theme.js';
import Spacer from "../../components/Spacer";
import Navigation from "../../components/Navigation";
import Strawberry from "../../components/Strawberry";
import HeaderDecoration from "../../components/HeaderDecoration";
import Logo from "../../components/Logo";
import Subheader from "../../components/Subheader";
import pageStyles from "../../components/pages.module.css";
import Footer from "../../components/Footer";
import GalleryPics from "../../components/GalleryPics";
import ImageList from './ImageList'

export default function Gallery() {
    return (
        <div className = {pageStyles.galleryBody} style = {Styles.body}>
            <HeaderDecoration />
            <Logo />
            <Subheader />
            <Navigation />
            <Strawberry heading = {"PHOTOS"} showLargeStrawberry = {"none"}/>
            <Spacer height = {2}/>
            {ImageList.map((image, k) => { 
                if (k%2 === 1) return // skip every odd number
                let image2;

                // no image 2 if it's past the last image
                if (k+1 >= ImageList.length){
                    image2=false
                } else {
                    image2 = ImageList[k+1]
                }
                return (
                    <GalleryPics imagePath1={image.src} alt1={image.alt} imagePath2={image2?.src} alt2={image2?.alt} />
                )
            })}
            <Footer />
        </div>
    );
}