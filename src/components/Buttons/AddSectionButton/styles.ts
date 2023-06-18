import styled, { css } from 'styled-components';

interface AddButtonProps {
	hasNoSections?: boolean;
}

export const StyledAddButton = styled.button<AddButtonProps>`
	transition: all 0.25s ease-in-out;
	cursor: pointer;
	color: var(--foreground);
	background-color: var(--orange);
	appearance: none;
	font-size: 43px;
	font-weight: bold;
	width: 50px;
	height: 50px;
	min-height: 50px;
	border-radius: 3px;
	border: 0;
	outline: 8px solid var(--off-background);
	margin: 20px auto;
	line-height: 0;
	&:hover {
		background-color: var(--background);
		color: var(--orange);
	}
	${({ hasNoSections }) =>
		hasNoSections === false &&
		css`
			margin-bottom: 100px;
		`}
`;
