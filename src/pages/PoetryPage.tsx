import NavBar from "../components/NavBar";
import Poem from "../components/Poem";
import "../style/PoetryPage.css";


interface PoetryPageProps {

}

type Poem = Array<Array<string>>;

const poems:Poem[] = [
    [
        [
            "The feeling of a blade against my skin",
            "It’s akin",
            "To the calm before the storm",
            "You cannot stop the storm",
            "There’s no use trying, this is the new norm",
            "The feeling of a blade against my skin",
            "It’s akin",
            "To a divers empty tank, you know it’s over",
            "No one will hear you screams, it’s over ",
            "You’d need more luck than a 4 leaf clover ",
            "The feeling of a blade against my skin",
            "It’s akin",
            "To the inking of a great historical map",
            "When uncovered it’ll be but a scrap ",
            "So I sit here, the blood inking my map",
            "The feeling of a blade against my skin",
            "It’s akin",
            "To the ultimate end",
            "To bringing me around the proverbial bend",
            "But it’s all just that, all meaningless and thin",
            "It’s all nothing more than akin"
        ]
    ],
    [
        [
            "The feeling of a blade against my skin",
            "It’s akin",
            "To the calm before the storm",
            "You cannot stop the storm",
            "There’s no use trying, this is the new norm",
            "The feeling of a blade against my skin",
            "It’s akin",
            "To a divers empty tank, you know it’s over",
            "No one will hear you screams, it’s over ",
            "You’d need more luck than a 4 leaf clover ",
            "The feeling of a blade against my skin",
            "It’s akin",
            "To the inking of a great historical map",
            "When uncovered it’ll be but a scrap ",
            "So I sit here, the blood inking my map",
            "The feeling of a blade against my skin",
            "It’s akin",
            "To the ultimate end",
            "To bringing me around the proverbial bend",
            "But it’s all just that, all meaningless and thin",
            "It’s all nothing more than akin"
        ]
    ],    
    [
        [
            "The feeling of a blade against my skin",
            "It’s akin",
            "To the calm before the storm",
            "You cannot stop the storm",
            "There’s no use trying, this is the new norm",
            "The feeling of a blade against my skin",
            "It’s akin",
            "To a divers empty tank, you know it’s over",
            "No one will hear you screams, it’s over ",
            "You’d need more luck than a 4 leaf clover ",
            "The feeling of a blade against my skin",
            "It’s akin",
            "To the inking of a great historical map",
            "When uncovered it’ll be but a scrap ",
            "So I sit here, the blood inking my map",
            "The feeling of a blade against my skin",
            "It’s akin",
            "To the ultimate end",
            "To bringing me around the proverbial bend",
            "But it’s all just that, all meaningless and thin",
            "It’s all nothing more than akin"
        ]
    ],
]


const PoetryPage:React.FC<PoetryPageProps> = ():JSX.Element => {



    return <div className="PoetryPage">
        <NavBar></NavBar>
        <div className="PoetryContent">
            {poems.map(i => <Poem poem={i}></Poem>)}
        </div>
    </div>
}

export default PoetryPage;