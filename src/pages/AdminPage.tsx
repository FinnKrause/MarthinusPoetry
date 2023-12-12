import { useState } from "react";
import "../style/AdminPage.css";


interface AdminPageProps {

}

const AdminPage:React.FC<AdminPageProps> = ():JSX.Element => {

    const [text, setText] = useState<string>("");
    const [poemCheck, setPoemChecked] = useState<boolean>(false);
    const [writingCheck, setWritingChecked] = useState<boolean>(false);

    const sendPoem = () => {
        if (!poemCheck && !writingCheck) {
            alert("Please select either Poem or Wrirting as the destination!")
            return;
        }
        if (text === "") {
            alert("No text! Schreib was rein du Huan!")
            return;
        }
        fetch(`https://magnus.finnkrause.com/${poemCheck ? "addPoetry" : "addWriting"}`, 
        {method: "POST", body: JSON.stringify(text.split("\n\n").map(i => i.split("\n")))})
        .then(console.log).catch(console.error)
    }

    return <div className="AdminPage">
        <div className="TypeSelection">
        <div className="RadioButton">
                <input type="checkbox" checked={poemCheck} onChange={() => {
                    setWritingChecked(false)
                    setPoemChecked(true)
                }}></input>
                <p>Poem</p>
            </div>            
            <div className="RadioButton">
                <input type="checkbox" checked={writingCheck} onChange={() => {
                    setPoemChecked(false)
                    setWritingChecked(true)
                }}></input>
                <p>Writing</p>
            </div>
        </div>

        <textarea className="SubmitField" value={text} onChange={(e) => setText(e.target.value)}></textarea>
        <button className="" onClick={sendPoem}>Send</button>
    </div>
}

export default AdminPage;