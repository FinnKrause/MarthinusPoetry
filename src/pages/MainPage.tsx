import AboutME from "../components/AboutME";
import NavBar from "../components/NavBar";
import "../style/MainPage.css";


interface MainPageProps {

}

const MainPage:React.FC<MainPageProps> = ():JSX.Element => {
    return <div className="MainPage">
        <NavBar></NavBar>
        <AboutME></AboutME>
    </div>
}

export default MainPage;