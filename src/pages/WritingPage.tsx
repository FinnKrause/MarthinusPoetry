import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Poem from "../components/Poem";
import "../style/WritingPage.css";


interface WritingPageProps {

}

type Piece = Array<Array<string>>;

const WritingPage:React.FC<WritingPageProps> = ():JSX.Element => {

    const [writing, setWriting] = useState<Array<Piece>>([[[]]]);

    useEffect(() => {
        fetch("https://api.violetnecrosis.com/getWriting").then(res => res.json()).then(res => setWriting(res.data)).catch(console.error)
    }, [])

    return <div className="WritingPage">
        <NavBar></NavBar>
        <div className="WritingContent content">
            {writing.map((i, idx) => <Poem key={idx} poem={i}></Poem>)}
        </div>
    </div>
}

export default WritingPage;