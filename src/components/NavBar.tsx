import { useEffect, useState } from "react";
import "../style/NavBar.css";
import Hamburger from "./Hamburger";
import CloseX from "./CloseX";
import moon from "../assets/moon.png";
import brightness from "../assets/brightness.png";



interface NavBarProps {
}

const NavBar:React.FC<NavBarProps> = ():JSX.Element => {
    
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const [light, setLight] = useState<boolean>(() => localStorage.getItem("theme") === "light");

    useEffect(() => {
        if (light) {
            document.body.style.setProperty("--text-color", "black");
            document.body.style.setProperty("--background-color", "white");
            document.body.style.setProperty("--background-color-light", "#f5f5f4");
        } else {
            document.body.style.setProperty("--text-color", "white");
            document.body.style.setProperty("--background-color", "#252627");
            document.body.style.setProperty("--background-color-light", "#363739");
        }
    }, [light])

    const updateTheme = (islight: boolean):void => {
        localStorage.setItem("theme", islight ? "light" : "dark");
        setLight(islight);
    }

    return <nav id="NavBar">
        {menuOpen && <div className="OpenNav">
            <div className="closeX">
            <CloseX setOpen={() => setMenuOpen(false)}></CloseX>
            </div>
            <div className="NavBarContent">
                <button onClick={() => {document.location = 'Donation';}}>Donation</button>
                <button onClick={() => {document.location = 'Poetry';}}>Poetry</button>
                <button onClick={() => {document.location = 'Writing';}}>Writing</button>
                <button onClick={() => {document.location = 'Photography';}}>Photography</button>
                <button onClick={() => {document.location = 'Instagram';}}>Instagram</button>
            </div>
            

        </div>}

        <div className="ClosedNav">
            <div className="left">
                <div className="hamburger">
                <Hamburger setOpen={() => setMenuOpen(true)}/>
                </div>
            </div>
            <div className="center">
                <h1 className="Title" onClick={() => document.location="/"}>Violet Poetry</h1>
            </div>
            <div className="right">
                {light && <img className="DarkLight ThemeSwitch" src={moon} onClick={() => updateTheme(false)}></img>}
                {!light && <img className="DarkLight ThemeSwitch" src={brightness} onClick={() => updateTheme(true)}></img>}
            </div>
            
        </div>
    </nav>
}

export default NavBar;