import GoogleLogoImg from '../../assets/logo-googleg-48dp.svg';
import { LoginContainer, ElementDivs, LoginTitle, GoogleButton, GoogleButtonLogo, GoogleButtonText, FormTitleContainer, FormTitle, FormContainer, StyledForm, Input, Button, LinkCadastro } from './LoginForm.styles';

function LoginForm() {

    /* teste de botão */
    const handleClick = () => {
        console.log("este botão está funcionando!");
      };

    return(
        <LoginContainer>
            {/* div do titulo */}
            <ElementDivs >
                <LoginTitle>Entre no Orange Portfólio</LoginTitle>
            </ElementDivs>

            {/* div do botão do google */}
            <ElementDivs>
                <GoogleButton type="submit" onClick={handleClick}>
                    <GoogleButtonLogo src={GoogleLogoImg} alt="Google Logo" />
                    <GoogleButtonText>Entrar com Google</GoogleButtonText>
                </GoogleButton>
            </ElementDivs>

            {/* div do formulário */}
            <FormContainer>
                <FormTitleContainer>
                    <FormTitle>Faça login com email</FormTitle>
                </FormTitleContainer>

                <StyledForm>
                    <Input type="email" placeholder="Email address"/>
                    <Input type="password" placeholder="Password"/>
                    <Button type="submit">ENTRAR</Button>
                </StyledForm>
                <LinkCadastro to="/cadastro">Cadastre-se</LinkCadastro>
            </FormContainer>
        </LoginContainer>
    );
}

export default LoginForm;