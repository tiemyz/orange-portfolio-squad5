import React, { useState } from 'react';
import { ButtonDefault } from '../../Buttons/ButtonStyles';
import { CadastroFormContainer, 
    Title, 
    StyledForm, 
    InputContainerFlex,
    InputLabel, 
    InputField, 
    InputLabelSobrenome,
    InputContainer, 
    VisibilityButton, 
    EyesIcon} from '../Forms.styles';
import EyeClosedIcon from '../../../assets/visibility-off.svg';
import EyeOpenIcon from '../../../assets/visibility-default.svg';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth, addToFirestore } from "../../services/firebaseConfig";

function CadastroForm() {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [warning, setWarning] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    const handleSignUp = async (e) => {
        e.preventDefault();

        // caso algum campo não tenha sido preenchido
        if (!name || !lastName || !email || !password) {
            setWarning("Preencha todos os campos obrigatórios!");
            return;
        }

        // caso o usuário esqueça de colocar o @ 
        if (!email.includes("@")) {
            setWarning("Digite um email válido.");
            return;
        }

        // se as infos estiverem ok, carregamento para a home
        setLoading(true);

        try {
            // Criar usuário no Firebase
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);

            // Adicionar nome ao perfil do usuário
            await updateProfile(userCredential.user, {
                displayName: `${name} ${lastName}`
            });

            // Adicionar informações ao Firestore
            const userId = userCredential.user.uid;
            const userData = { name, lastName, email, userId };
            await addToFirestore("users", userData);

            // Limpar os campos e exibir mensagem de sucesso
            setName("");
            setLastName("");
            setEmail("");
            setPassword("");
            setSuccessMessage("Cadastro realizado!");

            // Redirecionar para a página inicial (ou ajuste conforme necessário)
            navigate("/");
        } catch (error) {
            console.error("Erro ao criar conta:", error.message);

            // Tratar erros específicos
            if (error.code === "auth/email-already-in-use") {
                setWarning("Este e-mail já está cadastrado. Tente outro.");
            } else {
                setWarning("Erro ao criar conta. Tente novamente mais tarde.");
            }
        } finally {
            // Finalizar o carregamento, independentemente do resultado
            setLoading(false);
        }
    };

    const handleSignInWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, new GoogleAuthProvider());
            const user = result.user;
            console.log("Usuário autenticado com Google:", user);
            // Lógica adicional com o login do Google, se necessário
        } catch (error) {
            console.error("Erro ao autenticar com Google:", error.message);
        }
    };

    return (
        <CadastroFormContainer>
            <Title>Cadastre-se</Title>
            <StyledForm onSubmit={handleSignUp}>
                <InputContainerFlex>
                    <InputLabel>Nome*</InputLabel>
                    <InputField type="text" value={name} onChange={(e) => setName(e.target.value)}/>

                    <InputLabelSobrenome>Sobrenome*</InputLabelSobrenome>
                    <InputField type="text" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                </InputContainerFlex>

                <InputContainer>
                    <InputLabel>Email address</InputLabel>
                    <InputField type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </InputContainer>

                <InputContainer>
                    <InputLabel>Password</InputLabel>
                    <InputField type={showPassword ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <VisibilityButton type="button" onClick={handleTogglePassword}>
                        {showPassword ? (
                            <EyesIcon src={EyeClosedIcon} alt="Hide Password"/>
                        ) : (
                            <EyesIcon src={EyeOpenIcon} alt="Show Password"/>
                        )}
                    </VisibilityButton>
                </InputContainer>

                <ButtonDefault type="submit">CADASTRAR</ButtonDefault>
            </StyledForm>

            {/* Adicione mensagens de aviso ou sucesso */}
            {loading && <p>Carregando...</p>}
            {!loading && warning && <p style={{ color: "red" }}>{warning}</p>}
            {!loading && successMessage && <p style={{ color: "green" }}>{successMessage}</p>}

            {/* Adicione um link para redirecionar para outra página, se necessário */}
            <Link to="/">Voltar para a página inicial</Link>

            {/* Adicione o botão de login com Google */}
            <button type="button" onClick={handleSignInWithGoogle}>
                Entrar com Google
            </button>
        </CadastroFormContainer>
    );
}

export default CadastroForm;
