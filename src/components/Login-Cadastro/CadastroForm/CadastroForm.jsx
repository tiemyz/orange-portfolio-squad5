import { useState } from 'react';
import { ButtonDefault } from '../../Buttons/ButtonStyles';
import { CadastroFormContainer, 
    Title, 
    StyledForm, 
    InputContainerFlex,
    InputLabel, 
    InputField, 
    InputLabelSobrenome,
    InputContainer, 
    VisibilityButton, 
    EyesIcon} from '../Forms.styles';
import EyeClosedIcon from '../../../assets/visibility-off.svg';
import EyeOpenIcon from '../../../assets/visibility-default.svg';

function CadastroForm() {

    /* Olho de visibilidade da senha */
    const [showPassword, setShowPassword] = useState(false);

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <CadastroFormContainer>
            <Title>Cadastre-se</Title>
            <StyledForm>
                <InputContainerFlex>
                    {/* TODO: MELHORAR LABEL CONFORME O FIGMA */}
                    <InputLabel>Nome*</InputLabel>
                    <InputField type="text"/>

                    <InputLabelSobrenome>Sobrenome*</InputLabelSobrenome>
                    <InputField type="text"/>
                </InputContainerFlex>


                <InputContainer>
                    <InputLabel>Email address</InputLabel>
                    <InputField type="text"/>
                </InputContainer>

                <InputContainer>
                    <InputLabel>Password</InputLabel>
                    <InputField type={showPassword ? 'text' : 'password'}/>
                    <VisibilityButton type="button" onClick={handleTogglePassword}>
                        {showPassword ? (
                            <EyesIcon src={EyeClosedIcon} alt="Hide Password"/>
                        ) : (
                            <EyesIcon src={EyeOpenIcon} alt="Show Password"/>
                        )}
                    </VisibilityButton>
                </InputContainer>

                <ButtonDefault type="submit">CADASTRAR</ButtonDefault>
            </StyledForm>
        </CadastroFormContainer>
    );
}

export default CadastroForm;