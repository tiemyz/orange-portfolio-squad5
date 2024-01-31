import LoginForm from '../../../components/Login-Cadastro/LoginForm/LoginForm';
import {
  PageContainer,
  DivForm,
  DivImg,
  SideImg
} from '../LoginCadastro.styles';
import LoginPageImg from '../../../assets/images/img-pagina-login.png';

function LoginPage() {
  return (
    <PageContainer>
      <DivImg>
        <SideImg src={LoginPageImg} alt="Imagem ilustrativa" />
      </DivImg>

      <DivForm>
        <LoginForm />
      </DivForm>
    </PageContainer>
  )
}

export default LoginPage;
