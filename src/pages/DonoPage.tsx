import "../style/DonoPage.css";
import NavBar from "../components/NavBar";
import DonoPls from "../components/DonoPls";

interface DonoPageProps {

}

const DonoPage:React.FC<DonoPageProps> = ():JSX.Element => {
    return <div className="DonoContent">
     <NavBar></NavBar>  
     <div className="content">
     <DonoPls></DonoPls>   
        </div> 
    </div>
}

export default DonoPage;