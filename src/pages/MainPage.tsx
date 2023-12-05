import AboutME from "../components/AboutME";
import MainPic from "../components/MainPic";
import NavBar from "../components/NavBar";
import "../style/MainPage.css";


interface MainPageProps {

}

const MainPage:React.FC<MainPageProps> = ():JSX.Element => {
    return <div className="MainPage">
        <NavBar fadeIn></NavBar>
        <MainPic></MainPic>
        <AboutME></AboutME>
    </div>
}

export default MainPage;