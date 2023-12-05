import "../style/DonoPls.css";
import DonoButton from "./DonoButton";


interface DonoPlsProps {

}

const DonoPls:React.FC<DonoPlsProps> = ():JSX.Element => {
    return <div className="DonoWrapper"> 
        <div className="DonoLeft">
            <h1 className="Title">Donations are appreciated</h1>
            <p className="MEdesc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum necessitatibus amet mollitia eos quasi corporis laborum officiis, culpa assumenda veritatis nulla nisi, nobis recusandae quisquam quod blanditiis, expedita accusantium. Sint?</p>
        </div>
        <div className="DonoDonoButton">
            <DonoButton></DonoButton>
        </div>
    </div>
}

export default DonoPls;