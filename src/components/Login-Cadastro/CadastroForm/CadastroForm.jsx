import React, { useState } from 'react';
import { ButtonDefault } from '../../Buttons/Buttons.styles';
import {
  CadastroFormContainer,
  Title,
  StyledForm,
  InputContainerFlex,
  InputLabel,
  InputField,
  InputLabelSobrenome,
  InputContainer,
  VisibilityButton,
  EyesIcon
} from '../Forms.styles';
import SuccessPopup from '../../SuccessPopUp/SuccessPopup';
import EyeOpenIcon from '../../../assets/images/visibility-default.svg';
import EyeClosedIcon from '../../../assets/images/visibility-off.svg';
import {
  createUserWithEmailAndPassword,
  updateProfile,
  getAuth
} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { addToFirestore } from '../../../services/firebaseFirestore';

function CadastroForm() {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [warning, setWarning] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const navigate = useNavigate();
  const auth = getAuth();

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setWarning('');

    if (!name || !lastName || !email || !password) {
      setWarning('Preencha todos os campos obrigatórios!');
      return;
    }

    if (!email.includes('@')) {
      setWarning('Digite um email válido.');
      return;
    }

    setLoading(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await updateProfile(userCredential.user, {
        displayName: `${name} ${lastName}`
      });

      const userId = userCredential.user.uid;
      const userData = { name, lastName, email, userId };
      await addToFirestore('users', userData, userId);

      setName('');
      setLastName('');
      setEmail('');
      setPassword('');

      setShowSuccessPopup(true);
      setTimeout(() => {
        navigate('/');
      }, 1000);
    } catch (error) {
      console.error('Erro ao criar conta:', error.message);
      console.log('Código de erro Firebase:', error.code);

      if (error.code === 'auth/email-already-in-use') {
        setWarning('Este e-mail já está cadastrado.');
      } else if (error.code === 'auth/weak-password') {
        setWarning(
          'Cada senha deve ter, no mínimo, 6 caracteres e atender aos seguintes requisitos: Incluir números e letras maiúsculas e minúsculas.'
        );
      } else if (
        error.code === 'auth/invalid-email' ||
        error.code === 'auth/user-not-found' ||
        error.code === 'auth/wrong-password'
      ) {
        setWarning('E-mail ou senha incorretos.');
      } else {
        setWarning('Erro ao criar conta. Tente novamente mais tarde.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <CadastroFormContainer>
      {showSuccessPopup && <SuccessPopup />}
      <Title>Cadastre-se</Title>
      <StyledForm onSubmit={handleSignUp}>
        <InputContainerFlex>
          <InputLabel>Nome*</InputLabel>
          <InputField
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <InputLabelSobrenome>Sobrenome*</InputLabelSobrenome>
          <InputField
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </InputContainerFlex>

        <InputContainer>
          <InputLabel>Email address</InputLabel>
          <InputField
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </InputContainer>

        <InputContainer>
          <InputLabel>Password</InputLabel>
          <InputField
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <VisibilityButton type="button" onClick={handleTogglePassword}>
            {showPassword ? (
              <EyesIcon src={EyeClosedIcon} alt="Hide Password" />
            ) : (
              <EyesIcon src={EyeOpenIcon} alt="Show Password" />
            )}
          </VisibilityButton>
        </InputContainer>

        <ButtonDefault type="submit">CADASTRAR</ButtonDefault>
      </StyledForm>

      {loading && <p>Carregando...</p>}
      {!loading && warning && <p style={{ color: 'red' }}>{warning}</p>}
    </CadastroFormContainer>
  );
}

export default CadastroForm;



