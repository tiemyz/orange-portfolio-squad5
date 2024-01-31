import React, { useState } from 'react'
import { ButtonDefault } from '../../Buttons/ButtonStyles'
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
} from '../Forms.styles'
import SuccessPopup from '../../SuccessPopUp/SuccessPopup'
import EyeOpenIcon from '../../../assets/images/visibility-default.svg'
import EyeClosedIcon from '../../../assets/images/visibility-off.svg'
// Importações do FirebaseConfig
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithPopup,
  GoogleAuthProvider,
  getAuth
} from 'firebase/auth'
import { Form, Link, useNavigate } from 'react-router-dom'
import { addToFirestore } from '../../../services/firebaseFirestore'

function CadastroForm() {
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [warning, setWarning] = useState('')
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [showSuccessPopup, setShowSuccessPopup] = useState(false)
  const navigate = useNavigate()
  const auth = getAuth()

  const handleTogglePassword = () => {
    setShowPassword(!showPassword)
  }

  const handleSignUp = async e => {
    e.preventDefault()

    // Limpar mensagens anteriores
    setWarning('')

    // Verificar se os campos obrigatórios foram preenchidos
    if (!name || !lastName || !email || !password) {
      setWarning('Preencha todos os campos obrigatórios!')
      return
    }

    // Verificar se o e-mail é válido
    if (!email.includes('@')) {
      setWarning('Digite um email válido.')
      return
    }

    // Iniciar o carregamento
    setLoading(true)

    try {
      // Criar usuário no Firebase
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      )

      // Adicionar nome ao perfil do usuário
      await updateProfile(userCredential.user, {
        displayName: `${name} ${lastName}`
      })

      // Adicionar informações ao Firestore
      const userId = userCredential.user.uid
      const userData = { name, lastName, email, userId }
      await addToFirestore('users', userData)

      // Limpar os campos
      setName('')
      setLastName('')
      setEmail('')
      setPassword('')

      // Exibir o popup de sucesso após o usuário clicar em "cadastrar"
      setShowSuccessPopup(true)
      // Redirecionamento para a página de login e timout de 1 segundo
      setTimeout(() => {
        navigate('/')
      }, 1000)
    } catch (error) {
      console.error('Erro ao criar conta:', error.message)
      console.log('Código de erro Firebase:', error.code)

      // Tratar erros específicos
      if (error.code === 'auth/email-already-in-use') {
        setWarning('Este e-mail já está cadastrado.')
      } else if (error.code === 'auth/weak-password') {
        setWarning(
          ' cada senha deve ter, no mínimo, 6 caracteres e atender aos seguintes requisitos: Incluir números e letras maiúsculas e minúsculas.'
        )
      } else if (
        error.code === 'auth/invalid-email' ||
        error.code === 'auth/user-not-found' ||
        error.code === 'auth/wrong-password'
      ) {
        setWarning('E-mail ou senha incorretos.')
      } else {
        setWarning('Erro ao criar conta. Tente novamente mais tarde.')
      }
    } finally {
      // Finalizar o carregamento, independentemente do resultado
      setLoading(false)
    }
  }

  return (
    <CadastroFormContainer>
      {showSuccessPopup && <SuccessPopup />}
      <Title>Cadastre-se</Title>
      <StyledForm onSubmit={handleSignUp}>
        <InputContainerFlex>
          {/* TODO: MELHORAR LABEL CONFORME O FIGMA */}
          <InputLabel>Nome*</InputLabel>
          <InputField
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
          />

          <InputLabelSobrenome>Sobrenome*</InputLabelSobrenome>
          <InputField
            type="text"
            value={lastName}
            onChange={e => setLastName(e.target.value)}
          />
        </InputContainerFlex>

        <InputContainer>
          <InputLabel>Email address</InputLabel>
          <InputField
            type="text"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </InputContainer>

        <InputContainer>
          <InputLabel>Password</InputLabel>
          <InputField
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={e => setPassword(e.target.value)}
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
  )
}

export default CadastroForm
