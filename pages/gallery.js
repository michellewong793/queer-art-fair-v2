import Spacer from "../components/Spacer";
import Navigation from "../components/Navigation";
import Strawberry from "../components/Strawberry";
import HeaderDecoration from "../components/HeaderDecoration";
import Logo from "../components/Logo";
import Subheader from "../components/Subheader";
import pageStyles from "../components/pages.module.css";
import Footer from "../components/Footer";
import GalleryPics from "../components/GalleryPics";

export default function Gallery() {
    return (
        <div className = {pageStyles.galleryBody}>
            <HeaderDecoration />
            <Logo />
            <Subheader />
            <Navigation />
            <Strawberry heading = {"PHOTO GALLERY"} showLargeStrawberry = {"none"}/>
            <GalleryPics imagePath1 = {"url('/photos/P3115740.JPG')"} imagePath2 = {"url('/photos/P3115759.JPG')"}/>
            <GalleryPics imagePath1 = {"url('/photos/P3115806.JPG')"} imagePath2 = {"url('/photos/P3115854.JPG')"}/>
            <GalleryPics imagePath1 = {"url('/photos/P3115914.JPG')"} imagePath2 = {"url('/photos/P3115925.JPG')"}/>
            <GalleryPics imagePath2 = {"url('/photos/P3115734.JPG')"} imagePath1 = {"url('/photos/P3115753.JPG')"}/>
            <GalleryPics imagePath1 = {"url('/photos/P3115795.JPG')"} imagePath2 = {"url('/photos/P3115837.JPG')"}/>
            <GalleryPics imagePath1 = {"url('/photos/P3115887.JPG')"} imagePath2 = {"url('/photos/P3115816.JPG')"}/>
            <GalleryPics imagePath1 = {"url('/photos/P3115882.JPG')"} imagePath2 = {"url('/photos/P3115892.JPG')"}/>
            <GalleryPics imagePath1 = {"url('/photos/P3115790.JPG')"} imagePath2 = {"url('/photos/P3115767.JPG')"}/>
            <GalleryPics imagePath1 = {"url('/photos/P3115745.JPG')"} imagePath2 = {"url('/photos/P3115786.JPG')"}/>
            <Footer />
        </div>
    );
}