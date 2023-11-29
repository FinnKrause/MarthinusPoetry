import "./style/App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainPage from "./pages/MainPage";
import PoetryPage from "./pages/PoetryPage";

interface AppProps {

}

const App:React.FC<AppProps> = ():JSX.Element => {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<MainPage/>}/>
        <Route path="/donation" element={<h1>donation</h1>}/>
        <Route path="/poetry" element={<PoetryPage/>}/>
        <Route path="/writing" element={<h1>writing</h1>}/>
        <Route path="/photograpghy" element={<h1>photography</h1>}/>

        <Route path="/" element={<Navigate to="/home"/>}/>‚
        <Route path="*" element={<Navigate to="/home"/>}></Route>
      </Routes>
    </BrowserRouter>
  </>
}

export default App;