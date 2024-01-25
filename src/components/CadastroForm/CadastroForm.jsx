import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../services/firebaseConfig";

function CadastroForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [warning, setWarning] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    // caso algum campo não tenha sido preenchido
    if (!email || !password) {
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
      await createUserWithEmailAndPassword(auth, email, password);

      // Limpar os campos e exibir mensagem de sucesso
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

  return (
    <form onSubmit={handleSignUp}>
      <h1>Formulário de cadastro</h1>
      
      {/* Adicione os campos do formulário */}
      <label>Email:</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
  
      <label>Senha:</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
  
      {/* Adicione o botão de envio */}
      <button type="submit" disabled={loading}>
        {loading ? "Carregando..." : "Cadastrar"}
      </button>
  
      {/* Adicione mensagens de aviso ou sucesso */}
      {warning && <p style={{ color: "red" }}>{warning}</p>}
      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
      
      {/* Adicione um link para redirecionar para outra página, se necessário */}
      <Link to="/">Voltar para a página inicial</Link>
    </form>
  );
}
