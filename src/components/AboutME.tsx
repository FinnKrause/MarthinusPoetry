import "../style/AboutME.css";
import Marthinus from "../assets/Marthinus.jpeg"


interface AboutMEProps {

}

const AboutME:React.FC<AboutMEProps> = ():JSX.Element => {
    return <div className="MEwrapper"> 
        <div className="MEleft">
            <h1 className="Title">About me</h1>
            <p className="MEdesc">
                Hi, my name is Violet, I'm an amateur writer, poet and I indulge 
                in the occasional photography. My work mainly focuses on my personal 
                issues with body dysmorphia, self-hatred and depression along with 
                experiences of homophobia, transphobia or general xenophobia.
                I am a first generation South African - German immigrant 
                and I draw a lot of my perspective for the world and its people
                form the multitude of cultures and peoples i've been lucky
                enough to meet over the years thanks to this.
                I hope you 
                enjoy your stay :)
            </p>
        </div>
        <div className="MEpic">
            <img className="Portrait" src={Marthinus}></img>
        </div>
    </div>
}
export default AboutME;