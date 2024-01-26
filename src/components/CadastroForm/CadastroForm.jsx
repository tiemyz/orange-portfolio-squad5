import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth, updateProfile } from "../../services/firebaseConfig";

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

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <form onSubmit={handleSignUp}>
      <h1>Cadastre-se</h1>

      {/* Adicione os campos do formulário */}
      <label>Nome:</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />

      <label>Sobrenome:</label>
      <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required />

      <label>Email:</label>
      <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} required />

      <label>Password:</label>
      <input type={showPassword ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)} required autoComplete="current-password" />
      <button type="button" onClick={handleTogglePassword}>
        {showPassword ? "Esconder Senha" : "Mostrar Senha"}
      </button>

      {/* Adicione o botão de envio */}
      <button type="submit" disabled={loading}>
        {loading ? "Carregando..." : "Cadastrar"}
      </button>

      {/* Adicione mensagens de aviso ou sucesso */}
      {loading && <p>Carregando...</p>}
      {!loading && warning && <p style={{ color: "red" }}>{warning}</p>}
      {!loading && successMessage && <p style={{ color: "green" }}>{successMessage}</p>}

      {/* Adicione um link para redirecionar para outra página, se necessário */}
      <Link to="/">Voltar para a página inicial</Link>
    </form>
  );
}

export default CadastroForm;
