import { useState } from 'react';
import { BotaoEditarOuExcluir } from '../BotãoEditarOuExcluir/BotãoEditarOuExcluir';
import {
	SecaoProjetos,
	CampoBuscarTags,
	SubtituloProjetos,
	BotaoProjeto,
	StyledBodyText1,
	StyledBodyText2,
	ListaProjetos,
  BotaoLapis,
} from './SecaoMeusProjetosStyle';

/* TODO: O botão de editar tá saindo do lugar com a mudança de tela, consertar isso.
 - Adicionar os "espaços em branco" na lista de projetos
 - Retoques na responsividade (verificar a necessidade de tela intermediária) */

export default function SecaoMeusProjetos() {
	const [openEdit, setOpenEdit] = useState(false);
	return (
		<>
			<SecaoProjetos>
				<div className='projetos'>
					<div>
						<SubtituloProjetos>Meus projetos</SubtituloProjetos>
					</div>
					<div className='campo-de-busca'>
						<label htmlFor='buscar-tags'>
							<CampoBuscarTags
								type='text'
								id='buscar-tags'
								placeholder='Buscar tags'
							/>
						</label>
					</div>
					<ListaProjetos>
						<BotaoProjeto>
							<BotaoLapis
								id='pencil-icon'
								src='/assets/pencil.png'
								alt='Pencil icon'
								onClick={() => setOpenEdit(!openEdit)}
							/>
							<img
								id='icon-img'
								src='../../../assets/collections.png'
								alt='Icon imagem'
							/>
							<StyledBodyText1>Adicione seu primeiro projeto</StyledBodyText1>
							<StyledBodyText2>
								Compartilhe seu talento com milhares de pessoas
							</StyledBodyText2>
						</BotaoProjeto>
            <li></li>
						<li></li>
					</ListaProjetos>
				</div>
			</SecaoProjetos>
			{openEdit && <BotaoEditarOuExcluir />}
		</>
	);
}
