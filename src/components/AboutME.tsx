import "../style/AboutME.css";
import Marthinus from "../assets/Marthinus.jpeg"


interface AboutMEProps {

}

const AboutME:React.FC<AboutMEProps> = ():JSX.Element => {
    return <div className="MEwrapper"> 
        <div className="MEleft">
            <h1 className="Title">About me</h1>
            <p className="MEdesc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum necessitatibus amet mollitia eos quasi corporis laborum officiis, culpa assumenda veritatis nulla nisi, nobis recusandae quisquam quod blanditiis, expedita accusantium. Sint?</p>
        </div>
        <div className="MEpic">
            <img className="Portrait" src={Marthinus}></img>
        </div>
    </div>
}
export default AboutME;