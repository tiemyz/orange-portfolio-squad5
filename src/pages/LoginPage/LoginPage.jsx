import LoginForm from "../../components/Login-Cadastro/LoginForm/LoginForm";
import { LoginPageContainer,
        DivForm,
        DivImg, 
        Img} from '../LoginPage/LoginPage.styles';
import LoginPageImg from '../../assets/img-pagina-login.png'

function LoginPage() {
    return (
        <LoginPageContainer>
            <DivImg>
                <Img src={LoginPageImg} alt="Imagem ilustrativa"/>
            </DivImg>

            <DivForm>
                <LoginForm/> 
            </DivForm>
        </LoginPageContainer>
    );
}

export default LoginPage;