import "./style/App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PoetryPage from "./pages/PoetryPage";
import MainPage from "./pages/MainPage";
import DonoPage from "./pages/DonoPage";
import WritingPage from "./pages/WritingPage";
import PhotoPage from "./pages/PhotoPage";
import AdminPage from "./pages/AdminPage";

interface AppProps {

}

const App:React.FC<AppProps> = ():JSX.Element => {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<MainPage/>}/>
        <Route path="/donation" element={<DonoPage/>}/>
        <Route path="/poetry" element={<PoetryPage/>}/>
        <Route path="/writing" element={<WritingPage/>}/>
        <Route path="/photography" element={<PhotoPage/>}/>
        <Route path="/violetadmin" element={<AdminPage/>}/>
        <Route path="/" element={<Navigate to="/home"/>}/>‚
        {/* <Route path="*" element={<Navigate to="/home"/>}></Route> */}
      </Routes>
    </BrowserRouter>
  </>
}

export default App;