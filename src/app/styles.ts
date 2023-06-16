import styled from 'styled-components';

export const MODAL_Z_INDEX = 100;

export const Modal = styled.div`
	position: fixed;
	z-index: ${MODAL_Z_INDEX};
	inset: 40px;
	background: rgba(255, 255, 255, 0.98);
	box-shadow: 0 3px 10px rgba(0, 0, 0, 0.3);
`;
export const ModalHead = styled.h2``;
export const ModalBody = styled.div``;
export const ModalFoot = styled.div``;

export const SaveButton = styled.button``;

export const ModalCloseButton = styled.button`
	appearance: none;
	border: 0;
	background: transparent;
	transform: rotate(45deg);
	font-size: 32px;
	position: absolute;
	top: 5px;
	right: 10px;
	cursor: pointer;
	&:after {
		content: '+';
	}
`;
