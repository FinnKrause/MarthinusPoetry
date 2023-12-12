import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Poem from "../components/Poem";
import "../style/PoetryPage.css";


interface PoetryPageProps {

}

type Poem = Array<Array<string>>;

const PoetryPage:React.FC<PoetryPageProps> = ():JSX.Element => {

    const [poems, setPoems] = useState<Array<Poem>>([[[]]]);

    useEffect(() => {
        fetch("https://magnus.finnkrause.com/getPoetry").then(res => res.json()).then(res => setPoems(res.data)).catch(console.error)
    }, [])

    return <div className="PoetryPage">
        <NavBar></NavBar>
        <div className="PoetryContent content">
            {poems.map((i, idx) => <Poem key={idx} poem={i}></Poem>)}
        </div>
    </div>
}

export default PoetryPage;