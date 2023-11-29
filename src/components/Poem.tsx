
interface PoemProps {
    poem: Array<Array<string>>
}

const Poem:React.FC<PoemProps> = (Props):JSX.Element => {
    return <div className="Poem">
        {Props.poem.map((i, idx) => <div key={idx} className="Paragraph">
            {[...i].map((ii, iidx) => <p key={iidx} className="Line">{ii}</p>)}
        </div>)}
    </div>
}

export default Poem;