import styled from 'styled-components';

/*OBS: A versão desktop está separada pq tive dificuldades em adaptar para a versão mobile.
No figma a ordem dos elementos é diferente de uma versão para a outra e eu não consegui adaptar isso. */

export const AddProjectDiv = styled.div`
	background-color: #fdfdfd;
	height: 522px;
	position: relative;
	width: 890px;
`;

export const StyledH5 = styled.h5`
	color: #515255;
	font-size: 24px;
	font-weight: 400;
	left: 24px;
	position: relative;
	top: -20px;
`;
export const StyledText1 = styled.p`
	color: #515255;
	font-size: 16px;
	font-weight: 400;
	position: relative;
	top: -20px;
`;

export const StyledBtnContainer = styled.div`
	height: 74px;
	left: 25px;
	position: relative;
	top: 320px;
	width: 826px;

	& .preview-caption {
		& .preview-caption {
			color: #515255;
			font-size: 16px;
			font-weight: 400;
			position: relative;
		}
	}
`;

export const Btns = styled.div`
	align-items: flex-start;
	display: inline-flex;
	gap: 16px;
	left: 0;
	position: absolute;
	top: 32px;
`;

export const StyledFormContainer = styled.div`
	height: 336px;
	left: 24px;
	position: absolute;
	top: 72px;
	width: 826px;
`;

export const PreviewContainer = styled.div`
	height: 336px;
	position: relative;
	width: 389px;
`;

export const PreviewArea = styled.div`
	background-color: #e6e9f2;
	border-radius: 4px;
	height: 304px;
	left: 0;
	position: relative;
	top: -320px;
	width: 389px;
	cursor: pointer;
`;

export const BtnAddProject = styled.div`
	height: 122px;
	left: 60px;
	position: relative;
	top: 91px;
	width: 270px;

	& .img-icon {
		padding: 0 110px;
		position: relative !important;
	}
`;

export const StyledText2 = styled.p`
	color: #303133;
	font-size: 14px;
	font-weight: 400;
	opacity: 0.6;
	position: relative;
	width: 270px;
`;

export const StyledAddForm = styled.form`
	align-items: flex-start;
	display: flex;
	flex-direction: column;
	gap: 16px;
	height: 336px;
	left: 413px;
	position: absolute;
	top: 0;
	width: 413px;
`;

/*TODO: Adicionar efeito hover e efeito focus nos inputs 
(não consegui fazer sozinha sem conflitar)*/

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
		font-size: 16px;
		display: flex;
		flex: 0 0 auto;
		gap: 8px;
		padding: 16px;
		position: relative;
		width: 389px;
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
		display: flex;
		flex: 0 0 auto;
		gap: 8px;
		padding: 16px;
		width: 389px;
		height: 100px;
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
