import { BrowserRouter, Route, Routes } from "react-router-dom";
import CadastroPage from "../pages/Login-Cadastro/CadastroPage/CadastroPage";
import LoginPage from "../pages/Login-Cadastro/LoginPage/LoginPage";
import Home from "../pages/Home/Home";
import DescobrirPage from "../pages/Descobrir/DescobrirPage";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/cadastro" element={<CadastroPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/descobrir" element={<DescobrirPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;
