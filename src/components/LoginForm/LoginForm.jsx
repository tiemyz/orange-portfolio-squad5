import React, { useState, useEffect } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [warning, setWarning] = useState("");
  const [successMessage, setSuccessMessage] = useState(""); // Adiciona esta linha
  const [loading, setLoading] = useState(false);

  const authInstance = getAuth();
  const [signIn] = useSignInWithEmailAndPassword(authInstance);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(authInstance, (user) => {
      if (user) {
        // redirecionar apenas se o usuário estiver autenticado e não houver avisos
        if (!warning) {
          // Limpar mensagens de erro
          setWarning("");
          // Exibir mensagem de sucesso
          console.log("Usuário autenticado:", user);
          setSuccessMessage("Login bem-sucedido!");
          navigate("/");
        }
      }
    });

    return () => unsubscribe();
  }, [authInstance, navigate, warning]);

  async function handleSignIn(e) {
    e.preventDefault();

    if (!email || !password) {
      setWarning("Preencha todos os campos obrigatórios!");
      return;
    }

    if (!email.includes("@")) {
      setWarning("Digite um email válido.");
      return;
    }

    setLoading(true);

    try {
      await signInWithEmailAndPassword(authInstance, email, password);
      // limpar os campos se o login for bem-sucedido
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error("Erro ao fazer login:", error.message);

      // Exibir mensagem de erro apropriada
      if (error.code === "auth/wrong-password" || error.code === "auth/user-not-found") {
        setWarning("Credenciais inválidas. Verifique seu email e senha.");
      } else if (error.code === "auth/invalid-email") {
        setWarning("Email incorreto. Por favor, verifique o email digitado.");
      } else {
        // Mensagem de erro genérica
        setWarning("Erro ao fazer login. Por favor, tente novamente.");
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <h1>Formulário de Login</h1>
      <form onSubmit={handleSignIn}>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

        <label>Senha:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

        <button type="submit" disabled={loading}>
          {loading ? "Carregando..." : "Entrar"}
        </button>

        {warning && <p style={{ color: "red" }}>{warning}</p>}
        {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}

        <Link to="/cadastro">Ir para a página de cadastro</Link>
      </form>
    </div>
  );
}

export default LoginForm;
