import "../style/PhotoPage.css";
// import img1 from "../assets/Photography/IMG_0041.jpg"
// import img2 from "../assets/Photography/IMG_0042.jpg"
// import img3 from "../assets/Photography/IMG_0043.jpg"
// import img4 from "../assets/Photography/IMG_0045.jpg"
// import img5 from "../assets/Photography/IMG_0046.jpg"
// import img6 from "../assets/Photography/IMG_0047.jpg"
// import img7 from "../assets/Photography/IMG_0053.jpg"
// import img8 from "../assets/Photography/IMG_0055.jpg"
// import img9 from "../assets/Photography/IMG_0059.jpg"
// import img10 from "../assets/Photography/IMG_0060.jpg"

import NavBar from "../components/NavBar";


interface PhotoPageProps {

}

const PhotoPage:React.FC<PhotoPageProps> = ():JSX.Element => {
    return <div className="PhotoPage">
        <NavBar></NavBar>
        <div className="PhotoContent">
            <h1 style={{color: "var(--text-color)"}}>Coming soon</h1>
        {/* <img src={img1} loading="lazy"></img>
        <img src={img2} loading="lazy"></img>
        <img src={img3} loading="lazy"></img>
        <img src={img4} loading="lazy"></img>
        <img src={img5} loading="lazy"></img>
        <img src={img6} loading="lazy"></img>
        <img src={img7} loading="lazy"></img>
        <img src={img8} loading="lazy"></img>
        <img src={img9} loading="lazy"></img>
        <img src={img10} loading="lazy"></img> */}
        </div>
    </div>
}

export default PhotoPage;