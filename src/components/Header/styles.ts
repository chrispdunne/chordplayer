import styled, { css } from 'styled-components';
import { StyledDeleteButton } from '../Buttons/DeleteButton/styles';

export const StyledHeader = styled.header`
	display: flex;
	justify-content: flex-end;
	${StyledDeleteButton} {
		padding: 10px 20px;
	}
`;

const ButtonStyles = css`
	background: transparent;
	border: 0;
	color: var(--foreground);
	cursor: pointer;
`;

export const NavToggle = styled.button`
	${ButtonStyles}
	padding: 20px 25px;
`;
