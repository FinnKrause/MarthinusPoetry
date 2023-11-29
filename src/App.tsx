import "./style/App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainPage from "./pages/MainPage";
import PoetryPage from "./pages/PoetryPage";
import WritingPage from "./pages/WritingPage";
import PhotographyPage from "./pages/PhotographyPage";
import DonationPage from "./pages/DonationPage";

interface AppProps {

}

const App:React.FC<AppProps> = ():JSX.Element => {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<MainPage/>}/>
        <Route path="/donation" element={<DonationPage/>}/>
        <Route path="/poetry" element={<PoetryPage/>}/>
        <Route path="/writing" element={<WritingPage/>}/>
        <Route path="/photography" element={<PhotographyPage/>}/>

        <Route path="/" element={<Navigate to="/home"/>}/>
        <Route path="*" element={<Navigate to="/home"/>}></Route>
      </Routes>
    </BrowserRouter>
  </>
}

export default App;