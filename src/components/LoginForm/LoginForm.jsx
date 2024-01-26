import { useState } from 'react';
import { ButtonDefault } from '../Buttons/ButtonStyles';
import { LoginFormContainer, 
        TitleGoogleDiv, 
        Title, 
        GoogleButton, 
        GoogleButtonLogo, 
        GoogleButtonText, 
        FormContainer, 
        StyledForm, 
        FormTitle, 
        InputContainer, 
        InputLabel, 
        InputField, 
        VisibilityButton, 
        EyesIcon, 
        LinkCadastro } from './LoginForm.styles';
import GoogleLogoImg from '../../assets/logo-google.svg';
import EyeOpenIcon from '../../assets/visibility-default.svg';
import EyeClosedIcon from '../../assets/visibility-off.svg';

function LoginForm() {

    /* Teste botão do google */
    const handleClick = () => {
        console.log("este botão está funcionando!");
    };

    /* Olho de visibilidade da senha */
    const [showPassword, setShowPassword] = useState(false);

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <LoginFormContainer>
            {/* Div superior com o título e botão do google*/}
            <TitleGoogleDiv>
                <Title>Entre no Orange Portfólio</Title>
                <GoogleButton type="button" onClick={handleClick}>
                    <GoogleButtonLogo src={GoogleLogoImg} alt='Logo do google'/>
                    <GoogleButtonText>Entre com Google</GoogleButtonText>
                </GoogleButton>
            </TitleGoogleDiv>

            {/* Formulário de login */}
            <FormContainer>
                <StyledForm>
                    <FormTitle>Faça login com email</FormTitle>
    
                    <InputContainer>
                        <InputLabel>Email address</InputLabel>
                        <InputField type="text"/>
                    </InputContainer>

                    <InputContainer>
                        <InputLabel>Password</InputLabel>
                        <InputField type={showPassword ? 'text' : 'password'}/>
                        <VisibilityButton type="button" onClick={handleTogglePassword}>
                            {showPassword ? (
                            <EyesIcon src={EyeClosedIcon} alt="Hide Password"/>
                            ) : (
                            <EyesIcon src={EyeOpenIcon} alt="Show Password"/>
                            )}
                        </VisibilityButton>
                    </InputContainer>

                    <ButtonDefault type="submit">ENTRAR</ButtonDefault>
                </StyledForm>

                {/* Botão de redirecionamento a página de cadastro */}
                <LinkCadastro to="/cadastro">Cadastre-se</LinkCadastro>
            </FormContainer>
        </LoginFormContainer>
    );
}

export default LoginForm;