import { Alert, CheckImg, AlertText } from './SuccessPopup.styles';
import PopupVector from '../../assets/images/popup-vector.png';

function SuccessPopup() {
  return (
    <Alert>
      <CheckImg src={PopupVector} alt="Check vector" />
      <AlertText>Cadastro feito com sucesso</AlertText>
    </Alert>
  )
}

export default SuccessPopup;
