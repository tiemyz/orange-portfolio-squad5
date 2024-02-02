import React, { useState, useRef } from 'react';
import {
	ModalBackground,
	AddProjectContainer,
	DivTitulo,
	DivBotaoForm,
	DivH3Img,
	DivForm,
	DivFormInput,
	DivLink,
	DivBotoes,
	TituloDoModal,
	BotaoProjeto,
	TextDiv,
	StyledBodyTextP,
	SubtituloModal,
	DivSubtitulo,
	PorcentagemProgresso,
} from './AddProject.styles';
import collectionsImage from '../../assets/images/collections.png';
import { collection, addDoc } from 'firebase/firestore';
import { storage, db } from '../../services/firebaseConfig';
import { ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage';
import { getAuth } from 'firebase/auth';
import { ButtonGray, ButtonOrangeSmall } from '../Buttons/Buttons.styles';

// arquivo secundário com o POST de imagem e infos funcionando + salvamento no firestore & storage
function AddProject() {
	const [title, setTitle] = useState('');
	const [tags, setTags] = useState('');
	const [link, setLink] = useState('');
	const [description, setDescription] = useState('');
	const [image, setImage] = useState(null);
	const fileInputRef = useRef(null);
	const [progressPorcent, setProgressPorcent] = useState(0);
	const authInstance = getAuth();

	const handleImageUpload = async (event) => {
		const file = event.target.files[0];

		// lógica para upload da imagem
		const storageRef = ref(storage, `images/${file.name}`);
		const uploadTask = uploadBytesResumable(storageRef, file);

		uploadTask.on(
			'state_changed',
			(snapshot) => {
				const progress = Math.round(
					(snapshot.bytesTransferred / snapshot.totalBytes) * 100
				);
				setProgressPorcent(progress);
			},
			(error) => {
				alert(error);
			},
			() => {
				// url da imagem para subir no firebase
				getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
					setImage(downloadURL);
				});
			}
		);
	};

	// abrir a pasta do computador para selecionar uma imagem
	const handleOpenFileSelector = () => {
		fileInputRef.current.click();
	};

	const handleSaveProject = async () => {
		try {
			// conexão com o usuário logado na aplicação + save das infos
			const user = authInstance.currentUser;

			if (!user) {
				console.error('Erro ao salvar o projeto: Usuário não autenticado.');
				return;
			}

			// nome da coleção no firestore: "projetos"
			const docRef = await addDoc(collection(db, 'projetos'), {
				userId: user.uid, // id do usuário
				title, // título do projeto
				tags, // tags do projeto
				link, // url do projeto
				description, // descrição do projeto
				image, // imagem do projeto carregada pelo usuário
			});

			console.log('Projeto salvo com o ID:', docRef.id);

			setTitle('');
			setTags('');
			setLink('');
			setDescription('');
			setImage(null);
			setProgressPorcent(0);
		} catch (error) {
			console.error('Erro ao salvar o projeto:', error.message);
		}
	};

/*
 * TODO: Fazer o background do modal cobrir a tela inteira (verificar se)
   será necessário fazer isso com todos os outros modais!
 */

	return (
		// Fundo do modal
		<ModalBackground>
			{/* Container do Modal */}
			<AddProjectContainer>
				{/* DIV DO TÍTULO */}
				<DivTitulo>
					<TituloDoModal>Adicionar projeto</TituloDoModal>
				</DivTitulo>

				{/* DIV DO SUBTITULO DO FORMULÁRIO */}
				<DivSubtitulo>
					<SubtituloModal>
						Selecione o conteúdo que você deseja fazer upload
					</SubtituloModal>
				</DivSubtitulo>

				{/* DIV COM O BOTÃO DE SELECIONAR IMAGEM E INPUTS */}
				<DivBotaoForm>
					{/* DIV COM O <p> E O BOTÃO PARA SELECIONAR A IMAGEM */}
					<DivH3Img>
						<BotaoProjeto onClick={handleOpenFileSelector}>
							<input
								type='file'
								ref={fileInputRef}
								style={{ display: 'none' }}
								onChange={handleImageUpload}
							/>
						</BotaoProjeto>
						<TextDiv>
							<img
								src={collectionsImage}
								width={'46px'}
								alt='Ícone de upload'></img>
							<StyledBodyTextP>
								Compartilhe seu talento com milhares de pessoas
							</StyledBodyTextP>
						</TextDiv>
					</DivH3Img>

					{/* DIV PAI DO FORMULÁRIO + INPUTS */}
					<DivForm>
						{/* DIV DOS INPUTS */}
						<DivFormInput>
							<input
								type='text'
								placeholder='Título'
								value={title}
								onChange={(e) => setTitle(e.target.value)}
							/>
							<input
								type='text'
								placeholder='Tags'
								value={tags}
								onChange={(e) => setTags(e.target.value)}
							/>
							<input
								type='text'
								placeholder='Link'
								value={link}
								onChange={(e) => setLink(e.target.value)}
							/>
							<textarea
								type='text'
								placeholder='Descrição'
								value={description}
								onChange={(e) => setDescription(e.target.value)}
							/>
						</DivFormInput>
					</DivForm>
				</DivBotaoForm>

				{/* DIV DO LINK PARA VISUALIZAR PUBLICAÇÃO */}
				<DivLink>
					<a href='#'>Visualizar publicação</a>
					{/* DIV DOS BOTÕES DE SALVAR E CANCELAR */}
					<DivBotoes>
						<ButtonOrangeSmall
							onClick={handleSaveProject}
							customHeight
							customWidth>
							SALVAR
						</ButtonOrangeSmall>
						<ButtonGray customHeight customWidth>
							CANCELAR
						</ButtonGray>
					</DivBotoes>
				</DivLink>

				{/* IMAGEM SELECIONADA + PORCENTAGEM DE CARREGAMENTO */}
				{!image && (
					<PorcentagemProgresso>
						<p>{progressPorcent}%</p>
					</PorcentagemProgresso>
				)}
				{image && (
					<div>
						<img src={image} alt='Imagem' height={200} />
					</div>
				)}
			</AddProjectContainer>
		</ModalBackground>
	);
}

export default AddProject;
