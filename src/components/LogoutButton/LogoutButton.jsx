import { getAuth, signOut } from "firebase/auth";
import { ButtonOrangeSmall } from '../../components/Buttons/ButtonStyles';
import { useNavigate } from "react-router-dom";

function LogoutButton() {
    const authInstance = getAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await signOut(authInstance);
            navigate("/");
        } catch (error) {
            console.error("Erro de logout:", error.message);
        }
    };

    return (
        <ButtonOrangeSmall onClick={handleLogout}>Logout</ButtonOrangeSmall>
    );
}

export default LogoutButton;
