import { EditDeleteDropdown, StyledLi, StyledUl } from '../SecaoMeusProjetos/SecaoMeusProjetos.styles';

export function BotaoEditarOuExcluir() {
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
