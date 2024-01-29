import { EditDeleteDropdown, StyledLi, StyledUl } from '../SecaoMeusProjetos/SecaoMeusProjetosStyle';

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
