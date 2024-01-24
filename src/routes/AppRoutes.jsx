import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/LoginPage/LoginPage";
import CadastroPage from "../pages/CadastroPage/CadastroPage";
import Home from "../pages/Home/Home";

function AppRoutes() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage/>}/>
                <Route path="/cadastro" element={<CadastroPage/>}/>
                <Route path="/home" element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;