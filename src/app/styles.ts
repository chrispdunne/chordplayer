import styled from 'styled-components';

export const Modal = styled.div`
	position: fixed;
	z-index: var(--z-index-modal);
	inset: 10px;
	border: 1px solid var(--border-color);
	border-radius: 7px;
	background-color: var(--off-background);
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 10px 40px 40px;
	text-align: left;
`;
export const ModalHead = styled.h2`
	border-bottom: 1px solid var(--border-color);
	padding-bottom: 30px;
`;
export const ModalBody = styled.div``;
export const ModalFoot = styled.div``;

export const StrongButton = styled.button`
	transition: all 0.25s ease-in-out;
	cursor: pointer;
	color: var(--orange-contrast);
	background-color: var(--orange);
	appearance: none;
	border: 0;
	outline: 8px solid var(--off-background);
	&:hover {
		background-color: var(--background);
		color: var(--orange);
	}
`;

export const PrimaryButton = styled.button`
	cursor: pointer;
	border: none;
	color: var(--orange-contrast);
	font-weight: bold;
	font-size: 12px;
	text-transform: uppercase;
	margin: 20px 0;
	padding: 16px 10px;
	width: 100%;
	border-radius: 3px;
	background: var(--orange);
`;

export const SecondaryButton = styled(PrimaryButton)`
	color: var(--foreground);
	background: var(--border-color);
`;

export const ProButton = styled(SecondaryButton)`
	position: relative;
	&:before {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		right: 12px;
		content: 'PRO';
		padding: 5px 5px;
		background: var(--orange);
		color: var(--orange-contrast);
		border-radius: 3px;
		font-size: 9px;
		font-weight: bold;
	}
`;

export const SaveButton = styled(StrongButton)`
	text-transform: uppercase;
	font-weight: bold;
	padding: 15px 20px;
	border-radius: 3px;
	width: 100%;
	&:disabled,
	&:disabled:hover {
		background: var(--border-color);
		color: var(--background);
		cursor: not-allowed;
	}
`;

export const ModalCloseButton = styled.button`
	appearance: none;
	border: 0;
	background: transparent;
	transform: rotate(45deg);
	font-size: 32px;
	position: absolute;
	top: -2px;
	right: 2px;
	color: var(--foreground);
	cursor: pointer;
	&:after {
		content: '+';
	}
`;

export const InputContainer = styled.div`
	margin: 20px 0;
`;
export const Input = styled.input`
	background: transparent;
	border: 1px solid var(--border-color-strong);
	border-radius: 3px;
	width: 100%;
	color: var(--foreground);
	font-weight: bold;
	font-size: 18px;
	padding: 7px 12px 8px;
	box-sizing: border-box;
`;
export const NumberInput = styled(Input).attrs({ type: 'number' })``;

export const PlainInput = styled.input`
	background: transparent;
	border: 0;
	color: var(--foreground);
	font-weight: bold;
	font-size: 18px;
	text-align: center;
`;
export const PlainNumberInput = styled(PlainInput).attrs({ type: 'number' })``;
export const PlainSelect = styled.select`
	border: 0;
	background: transparent;
	appearance: none;
	color: var(--foreground);
	font-weight: bold;
	font-size: 18px;
	text-align: center;
`;

export const Label = styled.label`
	display: block;
	font-weight: bold;
	font-size: 14px;
	margin: 0 0 10px;
`;

export const AddOnInputContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	border: 1px solid var(--border-color-strong);
	border-radius: 3px;
`;
export const AddOnInput = styled(Input)`
	border: 0;
`;
export const AddOn = styled.div`
	line-height: 1;
	padding-right: 10px;
	font-weight: bold;
	font-size: 13px;
`;
