import { getAuth, signOut } from "firebase/auth";
import { ButtonOrangeExit } from '../../components/Buttons/Buttons.styles';
import { useNavigate } from "react-router-dom";
import ExitIcon from '../../assets/images/exit-icon.png';

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
        <ButtonOrangeExit onClick={handleLogout} style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <img src={ExitIcon} style={{height: '20px'}}/>
        </ButtonOrangeExit>
    );
}

export default LogoutButton;
