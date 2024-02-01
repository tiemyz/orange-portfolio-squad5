import { EditDeleteDropdown, StyledLi, StyledUl } from '../SecaoMeusProjetos/SecaoMeusProjetos.styles';

function BotaoEditarOuExcluir() {
	return (
		<>
			<EditDeleteDropdown>
				<StyledUl>
					<StyledLi className='editar'>Editar</StyledLi>
					<StyledLi className='excluir'>Excluir</StyledLi>
				</StyledUl>
			</EditDeleteDropdown>
		</>
	);
}

export default BotaoEditarOuExcluir;