import { BrowserRouter, Route, Routes } from "react-router-dom";
import CadastroPage from "../pages/Login-Cadastro/CadastroPage/CadastroPage";
import LoginPage from "../pages/Login-Cadastro/LoginPage/LoginPage";
import Home from "../pages/Home/Home";
import { AddProjectModal } from "../components/AddProjectModal/Desktop/AddProjectModal";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/cadastro" element={<CadastroPage />} />
                <Route path="/home" element={<Home />} />
                <Route path="/add-project" element={<AddProjectModal />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;