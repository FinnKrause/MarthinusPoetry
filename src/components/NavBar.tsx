import { useEffect, useState } from "react";
import "../style/NavBar.css";
import Hamburger from "./Hamburger";
import CloseX from "./CloseX";
import moon from "../assets/moon.png";
import brightness from "../assets/brightness.png";
import DonoButton from "./DonoButton";



interface NavBarProps {
    fadeIn?: boolean;
}

const NavBar:React.FC<NavBarProps> = (Props):JSX.Element => {
    
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const [light, setLight] = useState<boolean>(() => localStorage.getItem("theme") === "light");

    useEffect(() => {
        if (light) {
            document.body.style.setProperty("--text-color", "black");
            document.body.style.setProperty("--background-color", "white");
            document.body.style.setProperty("--background-color-light", "#f5f5f4");
        } else {
            document.body.style.setProperty("--text-color", "white");
            document.body.style.setProperty("--background-color", "#363739");
            document.body.style.setProperty("--background-color-light", "#252627");
        }
    }, [light])

    const updateTheme = (islight: boolean):void => {
        localStorage.setItem("theme", islight ? "light" : "dark");
        setLight(islight);
    }

    return <nav id="NavBar" style={{animation: (Props.fadeIn ? "fadeIn 1s linear 1s forwards" : ""), opacity: (Props.fadeIn ? 0 : 1)}}>
        {menuOpen && <div className="OpenNav">
            <div className="closeX">
            <CloseX setOpen={() => setMenuOpen(false)}></CloseX>
            </div>
            <div className="NavBarContent">
                <button onClick={() => {document.location = 'poetry';}}>Poetry</button>
                <button onClick={() => {document.location = 'writing';}}>Writing</button>
                <button onClick={() => {document.location = 'photography';}}>Photography</button>
                <button onClick={() => {window.open("https://instagram.com/violet_necrosis/")}}>Instagram</button>
                <button onClick={() => {window.open("https://paypal.com/")}}>Donation</button>
                {/* <button onClick={() => {document.location = 'donation';}}>Donation</button> */}
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
                <DonoButton withoutText></DonoButton>
                {light && <img className="DarkLight ThemeSwitch" src={moon} onClick={() => updateTheme(false)}></img>}
                {!light && <img className="DarkLight ThemeSwitch" src={brightness} onClick={() => updateTheme(true)}></img>}
            </div>
            
        </div>
    </nav>
}

export default NavBar;