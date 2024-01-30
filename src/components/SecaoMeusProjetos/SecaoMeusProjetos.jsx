import { useState } from 'react';
import { BotaoEditarOuExcluir } from '../BotãoEditarOuExcluir/BotãoEditarOuExcluir';
import {
	SecaoProjetos,
	CampoBuscarTags,
	SubtituloProjetos,
	BotaoProjeto,
	StyledBodyText1,
	ListaProjetos,
	BotaoLapis,
	ContainerProjeto,
} from './SecaoMeusProjetosStyle';

/* TODO: 
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
						<ContainerProjeto>
							<BotaoLapis
								id='pencil-icon'
								src='/assets/pencil.png'
								alt='Pencil icon'
								onClick={() => setOpenEdit(!openEdit)}
							/>
							<BotaoProjeto onClick={() => window.alert('Tudo ok!')}>
							<StyledBodyText1>Adicione seu primeiro projeto</StyledBodyText1>
							</BotaoProjeto>
						</ContainerProjeto>
						
							<ContainerProjeto></ContainerProjeto>
						
						
							<ContainerProjeto></ContainerProjeto>
					</ListaProjetos>
				</div>
			</SecaoProjetos>
			{openEdit && <BotaoEditarOuExcluir />}
		</>
	);
}
