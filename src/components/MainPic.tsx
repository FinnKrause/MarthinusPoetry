import "../style/MainPic.css";
import Pic from "../assets/Vanitas2.png"


interface MainPicProps {

}

const MainPic:React.FC<MainPicProps> = ():JSX.Element => {
    return <div className="Pic">
        <img src={Pic}></img>
    </div>
}

export default MainPic;