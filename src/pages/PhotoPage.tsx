import "../style/PhotoPage.css";
import img1 from "../assets/Photography/img1.jpg"
import img2 from "../assets/Photography/img2.jpg"
import img3 from "../assets/Photography/img3.jpg"
import img4 from "../assets/Photography/img4.jpg"
import img5 from "../assets/Photography/img5.jpg"
import img6 from "../assets/Photography/img6.jpg"
import img7 from "../assets/Photography/img7.jpg"
import img8 from "../assets/Photography/img8.jpg"


import NavBar from "../components/NavBar";

interface PhotoPageProps {

}

const PhotoPage:React.FC<PhotoPageProps> = ():JSX.Element => {
    return <div className="PhotoPage">
        <NavBar></NavBar>
        <div className="PhotoContent">
            {/* <h1 style={{color: "var(--text-color)"}}>Coming soon</h1> */}
        <img src={img1} loading="lazy"></img>
        <img src={img2} loading="lazy"></img>
        <img src={img3} loading="lazy"></img>
        <img src={img4} loading="lazy"></img>
        <img src={img5} loading="lazy"></img>
        <img src={img6} loading="lazy"></img>
        <img src={img7} loading="lazy"></img>
        <img src={img8} loading="lazy"></img>
        </div>
    </div>
}

export default PhotoPage;