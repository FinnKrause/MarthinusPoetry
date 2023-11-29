import NavBar from "../components/NavBar";
import Poem from "../components/Poem";
import "../style/WritingPage.css";


interface WritingPageProps {

}

type Poem = Array<Array<string>>;

const poems:Poem[] = [
    [
        [
            "I was asked once what depression feels like",
            "I told them then with a fake smile and a mocking grace that I’d write it down when I knew",
            "I’d make it visual the only way I know",
            "With empty words and broken metaphors and anecdotes no sane person could ever dream up and",
            "for a while I did so, through poetry, or my attempt at it, but it wasn’t enough, it’s never",
            "good enough ",
            "Depression is a distinct feeling",
            "Not one of pain as such but one of loss",
            "You feel you know what life should be like",
            "You feel you know what you should think of yourself but when you grab for that glowing orb",
            "of self satisfaction that you so clearly visualise you open your palm to find only disdain",
            "for what you see in the mirror or in the camera of your phone or in the picture you keep",
            "in your wallet to remind you of the one you keep in the back of your head every time you try",
            "to end it all because you know that she’d be devastated if you actually went through with it.",
            "You know you promised a young girl a long time ago that if you killed yourself you’d do it",
            "together and you know that for her sake you cannot. You know your betrothed could not handle",
            "the news of your departure and that if you went it would be too soon for them, you know these",
            "three have shaped the person you are, they’ve shaped the person you still wish you could be,",
            "they’ve shaped the ideal you’ve always held so dear, the unrealised potential you hoped for.",
            "But you’re lost in a sea of horrors and you cannot swim, your legs are tense your arms are",
            "heavy you never learned to deal with the weakness or the inability you now struggle with",
            "because you were always told it didn’t matter and that the ocean that was slowly rising",
            "around you, pushing you down, filling your panic, it was never real, you were told you were",
            "mad, told to ignore it and not make a big deal out of something that didn’t exist, you now",
            "float around in the endless deep that seems to keep growing ever darker and darker and darker",
            "and you start to lose your breath and you try to gulp some air but your lungs fill bit by bit",
            "by bit by fucking but with the darkness and you start to choke. You choke and you cannot stop,",
            "people start to notice and give you some worthless breath of words that tell you you’ll be fine",
            "instead of helping you out, they give you a high five or a scolding look as you struggle and",
            "float further down the blackness. You try and try to find a breath in anything, you try to find",
            "anything that makes your ever closing throat suck just the littlest bit of life, of the feeling",
            "of being alive out of the world. And you find it, you find the tiniest little pocket of air with",
            "every slice and you hate yourself more each time you attempt to breathe but it’s never enough for",
            "a whole breath, it’s always just the taste at the tip of your tongue, never more, so you keep",
            "slicing and cutting and stabbing and you become desperate but you don’t want them to know so you",
            "smile out of fear that they could hate you more than they already do because you just want the",
            "suffering to end but it won’t. You pick up a cigarette because you heard it could calm you down",
            "and gods above it does, so you keep going, and then you realise that they hate you for it, they",
            "despise that you cannot find a way out without some drug so you turn to the bottle and it does",
            "little so you keep going until you hate yourself so much you smash it on the steps to some house",
            "and you keep slicing and smoking and eventually it’s all too much so you try again to rid",
            "yourself of yourself for being wrong, for being born wrong, for not accepting it. And you think",
            "of those three, the ones who would be sad and have a reason, the ones who know as close to you",
            "as any ever would, and you press the blade into you arm and you cry and then you get a message.",
            "You pull yourself out and pretend that you’re fine, you hit yourself for attempting to take the",
            "easy way out that’s oh so hard. You spiral further and further as the hatred grows and grows",
            "and eventually the blood isn’t enough, the faint scars remind you too little so you decide to",
            "grab that damned cigarette and burn through your flesh, and it feels awful, but it makes you",
            "feel, so you do it again and again and keep spiralling. You need help but you can’t ask for it,",
            "you drown again and again and grab for every little snippet of oxygen and proceed to overdose",
            "at your earliest convenience, you know that what you do to yourself is wrong but who cares right?",
            "It’s the wrong body anyway so might as well abuse it right?",
            "That’s the short version, I hope it provides some insight.",   
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


const WritingPage:React.FC<WritingPageProps> = ():JSX.Element => {



    return <div className="WritingPage">
        <NavBar></NavBar>
        <div className="WritingContent">
            {poems.map(i => <Poem poem={i}></Poem>)}
        </div>
    </div>
}

export default WritingPage;