import styled from 'styled-components';

/*OBS: A versão desktop está separada pq tive dificuldades em adaptar para a versão mobile.
No figma a ordem dos elementos é diferente de uma versão para a outra e eu não consegui adaptar isso. */

export const ModalBackground = styled.div`
	background: rgba(0, 0, 0, 0.5); /* Cor de fundo com transparência */
	position: relative;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const AddProjectDiv = styled.div`
	background-color: #fdfdfd;
	height: 859px;
	width: 312px;
	display: flex;
	flex-direction: row;
	position: relative;
	margin: 148px 24px;
`;

export const StyledH5 = styled.h5`
	color: #515255;
	font-size: 24px;
	font-weight: 400;
	left: 0;
	margin: 24px;
	position: absolute;
	top: -10px;
	width: 263px;
`;
export const StyledAddForm = styled.form`
	align-items: flex-start;
	display: flex;
	flex-direction: column;
	gap: 16px;
	height: 684px;
	left: 6px;
	margin: 60px 0 0 4px;
	position: absolute;
	width: 263px;
`;

//TODO: Adicionar efeito hover e efeito focus (não consegui fazer sozinha)

export const StyledInput = styled.div`
	align-items: flex-start;
	border: none;
	border-radius: 4px;
	display: flex;
	flex-direction: column;
	padding: 0px 12px;
	position: relative;

	& input {
		border: 1px solid #818388;
		align-items: center;
		align-self: stretch;
		border-radius: 4px;
		font-size: 16px;
		display: flex;
		flex: 0 0 auto;
		gap: 8px;
		padding: 12px;
		position: relative;
		width: 243px;
		height: 24px;
	}

	& label {
		color: #818388;
		flex: 1;
		font-size: 16px;
		font-weight: 400;
		margin-top: -1px;
		position: relative;
	}
`;

export const StyledTextArea = styled.div`
	align-items: flex-start;
	border-radius: 4px;
	display: flex;
	flex-direction: column;
	padding: 0px 12px;
	position: relative;

	& textarea {
		border: 1px solid #818388;
		font-family: 'Roboto', sans-serif;
		font-size: 16px;
		resize: none;
		border-radius: 4px;
		display: flex;
		flex: 0 0 auto;
		gap: 8px;
		padding: 16px;
		width: 235px;
		height: 88px;
		position: relative;
	}

	& label {
		color: #818388;
		flex: 1;
		font-size: 16px;
		font-weight: 400;
		margin-top: -1px;
		position: relative;
	}
`;

export const PreviewContainer = styled.div`
	width: 263px;
	display: flex;
	align-items: center;
	margin: 16px 24px;
`;

export const StyledText1 = styled.p`
	color: #515255;
	font-size: 16px;
	font-weight: 400;
	position: relative;
	margin: 0 16px;
`;

export const PreviewArea = styled.div`
	background-color: #e6e9f2;
	display: flex;
	margin: 0;
	border-radius: 4px;
	height: 304px;
	align-items: center;
	position: relative;
	width: 270px;
	top: -16px;
	left: -6px;
	cursor: pointer;
`;

export const BtnAddProject = styled.div`
	position: relative;
	padding: 0 10px;
	height: 122px;
	width: 240px;

	& .img-icon {
		padding: 0 75px;
		position: relative;
		margin: 0 20px 0 20px;
	}
`;

export const StyledText2 = styled.p`
	color: #515255;
	font-size: 14px;
	font-weight: 400;
	opacity: 0.6;
	position: relative;
	width: 240px;
`;

export const StyledBtnContainer = styled.div`
	width: 266;
	height: 100%;

	& .preview-caption {
		color: #303133;
		font-size: 16px;
		font-weight: 400;
		margin: 0 16px;
		position: relative;
		top: -35px;
	}
`;

export const Btns = styled.div`
	align-items: flex-start;
	display: inline-flex;
	gap: 16px;
	position: relative;
	margin: 0 16px;
	top: -20px;
`;

export const StyledFormContainer = styled.div`
	height: 336px;
	left: 32px;
	position: absolute;
	top: 72px;
	width: 826px;
`;
