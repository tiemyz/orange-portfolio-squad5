import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CadastroPage from "../pages/Login-Cadastro/CadastroPage/CadastroPage";
import LoginPage from "../pages/Login-Cadastro/LoginPage/LoginPage";
import Home from "../pages/Home/Home";
import Header from "../components/Header/Header";
import Perfil from "../components/Perfil/Perfil";
import { ProfileImageContextProvider } from '../components/contex/ProfileImageContext';

function AppRoutes() {
    const [profileImage, setProfileImage] = useState(null);

    return (
        <BrowserRouter>
            {/* Adicione o ProfileImageContextProvider aqui */}
            <ProfileImageContextProvider>
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/cadastro" element={<CadastroPage />} />
                    <Route
                        path="/home"
                        element={<Home setProfileImage={setProfileImage} />}
                    />
                    <Route
                        path="/perfil"
                        element={<Perfil setProfileImage={setProfileImage} />}
                    />
                    <Route
                        path="/header"
                        element={<Header profileImage={profileImage} />}
                    />
                </Routes>
            </ProfileImageContextProvider>
        </BrowserRouter>
    );
}

export default AppRoutes;