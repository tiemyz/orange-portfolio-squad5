import CadastroForm from '../../../components/Login-Cadastro/CadastroForm/CadastroForm';
import {
  PageContainer,
  DivForm,
  DivImg,
  SideImg
} from '../LoginCadastro.styles';
import CadastroPageImg from '../../../assets/images/img-pagina-cadastro.png';

function CadastroPage() {
  return (
    <PageContainer>
      <DivImg>
        <SideImg src={CadastroPageImg} alt="Imagem ilustrativa" />
      </DivImg>

      <DivForm>
        <CadastroForm />
      </DivForm>
    </PageContainer>
  )
}

export default CadastroPage;
