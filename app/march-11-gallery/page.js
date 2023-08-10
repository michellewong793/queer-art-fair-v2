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

export default function Gallery() {
    return (
        <div className = {pageStyles.galleryBody} style = {Styles.body}>
            <HeaderDecoration />
            <Logo />
            <Subheader />
            <Navigation />
            <Strawberry heading = {"PHOTOS"} showLargeStrawberry = {"none"}/>
            <Spacer height = {2}/>
            <GalleryPics imagePath1 = {"url('/photos/P3115740-min.webp')"} imagePath2 = {"url('/photos/P3115759-min.webp')"}/>
            <GalleryPics imagePath1 = {"url('/photos/P3115806-min.webp')"} imagePath2 = {"url('/photos/P3115854-min.webp')"}/>
            <GalleryPics imagePath1 = {"url('/photos/P3115914-min.webp')"} imagePath2 = {"url('/photos/P3115925-min.webp')"}/>
            <GalleryPics imagePath2 = {"url('/photos/P3115734-min.webp')"} imagePath1 = {"url('/photos/P3115753-min.webp')"}/>
            <GalleryPics imagePath1 = {"url('/photos/P3115795-min.webp')"} imagePath2 = {"url('/photos/P3115837-min.webp')"}/>
            <GalleryPics imagePath1 = {"url('/photos/P3115887-min.webp')"} imagePath2 = {"url('/photos/P3115816-min.webp')"}/>
            <GalleryPics imagePath1 = {"url('/photos/P3115882-min.webp')"} imagePath2 = {"url('/photos/P3115892-min.webp')"}/>
            <GalleryPics imagePath1 = {"url('/photos/P3115790-min.webp')"} imagePath2 = {"url('/photos/P3115767-min.webp')"}/>
            <GalleryPics imagePath1 = {"url('/photos/P3115745-min.webp')"} imagePath2 = {"url('/photos/P3115786-min.webp')"}/>
            <Footer />
        </div>
    );
}