import React, { useState, useEffect } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider } from "firebase/auth";
import { ButtonDefault } from '../../Buttons/ButtonStyles';
import { LoginFormContainer, 
    TitleGoogleDiv, 
    Title, 
    GoogleButton, 
    GoogleButtonLogo, 
    GoogleButtonText, 
    StyledForm, 
    FormTitle, 
    InputContainer, 
    InputLabel, 
    InputField, 
    VisibilityButton, 
    EyesIcon, 
    LinkCadastro } from '../Forms.styles';
import GoogleLogoImg from '../../../assets/logo-google.svg';
import EyeOpenIcon from '../../../assets/visibility-default.svg';
import EyeClosedIcon from '../../../assets/visibility-off.svg';

// Importações do FirebaseConfig
import { signInWithPopup, googleProvider } from "../../../services/firebaseConfig";

function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [warning, setWarning] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const authInstance = getAuth();
    const [signIn] = useSignInWithEmailAndPassword(authInstance);
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(authInstance, (user) => {
            if (user) {
                if (!warning) {
                    setWarning("");
                    navigate("/home");
                }
            }
        });

        return () => unsubscribe();
    }, [authInstance, navigate, warning]);

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    const handleSignIn = async (e) => {
        e.preventDefault();
    
        if (!email || !password) {
            setWarning("Preencha todos os campos obrigatórios!");
            return;
        }
    
        if (!email.includes("@")) {
            setWarning("Digite um email válido.");
            return;
        }
    
        setLoading(true);
    
        try {
            await signInWithEmailAndPassword(authInstance, email, password);
            setEmail("");
            setPassword("");
            setWarning(""); 
            setSuccessMessage("Login bem-sucedido!");
        } catch (error) {
            console.error("Erro ao fazer login:", error.message);
    
            if (error.code === "auth/wrong-password" || error.code === "auth/user-not-found") {
                setWarning("Credenciais inválidas. Verifique seu email e senha.");
            } else if (error.code === "auth/invalid-email") {
                setWarning("Email incorreto. Por favor, digite um email válido.");
            } else {
                setWarning("Erro ao fazer login. Por favor, tente novamente.");
            }
        } finally {
            setLoading(false);
        }
    };    

    const handleSignInWithGoogle = async () => {
        try {
            const result = await signInWithPopup(authInstance, new GoogleAuthProvider());
            const user = result.user;
            console.log("Usuário autenticado com Google:", user);
        } catch (error) {
            console.error("Erro ao autenticar com Google:", error.message);
        }
    };

    return (
        <LoginFormContainer>
            <TitleGoogleDiv>
                <Title>Entre no Orange Portfólio</Title>
                <GoogleButton type="button" onClick={handleSignInWithGoogle}>
                    <GoogleButtonLogo src={GoogleLogoImg} alt='Logo do google'/>
                    <GoogleButtonText>Entre com Google</GoogleButtonText>
                </GoogleButton>
            </TitleGoogleDiv>

            <StyledForm onSubmit={handleSignIn}>
                <FormTitle>Faça login com email</FormTitle>
                <InputContainer>
                    <InputLabel>Email address</InputLabel>
                    <InputField 
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        autoComplete="username"
                    />
                </InputContainer>

                <InputContainer>
                    <InputLabel>Password</InputLabel>
                    <InputField 
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        autoComplete="current-password"
                    />
                    <VisibilityButton type="button" onClick={handleTogglePassword}>
                        {showPassword ? (
                            <EyesIcon src={EyeClosedIcon} alt="Hide Password"/>
                            ) : (
                            <EyesIcon src={EyeOpenIcon} alt="Show Password"/>
                        )}
                    </VisibilityButton>
                </InputContainer>

                <ButtonDefault type="submit">ENTRAR</ButtonDefault>
                <LinkCadastro to="/cadastro">Cadastre-se</LinkCadastro>
            </StyledForm>

            {/* Adicionar mensagens de aviso ou sucesso */}
            {loading && <p>Carregando...</p>}
            {!loading && warning && <p style={{ color: "red" }}>{warning}</p>}
            {!loading && successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
        </LoginFormContainer>
    );
}

export default LoginForm;