import styled from 'styled-components';

export const Modal = styled.div`
	position: fixed;
	z-index: var(--z-index-modal);
	inset: 40px;
	border: 1px solid var(--border-color);
	border-radius: 7px;
	background-color: var(--off-background);
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 20px 20px 40px;
`;
export const ModalHead = styled.h2``;
export const ModalBody = styled.div``;
export const ModalFoot = styled.div``;

export const SaveButton = styled.button`
	appearance: none;
	border: 0;
	background: var(--background);
	color: var(--foreground);
	cursor: pointer;
	text-transform: uppercase;
	font-weight: bold;
	padding: 10px 20px;
	border-radius: 5px;
	outline: 4px solid var(--foreground);
`;

export const ModalCloseButton = styled.button`
	appearance: none;
	border: 0;
	background: transparent;
	transform: rotate(45deg);
	font-size: 32px;
	position: absolute;
	top: 5px;
	right: 10px;
	color: var(--foreground);
	cursor: pointer;
	&:after {
		content: '+';
	}
`;
