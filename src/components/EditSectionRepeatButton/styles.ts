import styled from 'styled-components';

export const StyledRepeatButton = styled.button`
	cursor: pointer;
	border: none;
	color: var(--foreground);
	left: 50%;
	transform: translateX(-50%);
	position: absolute;
	top: -35px;
	background: var(--off-background);
	border-radius: 7px;
	padding: 10px 34px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-weight: bold;
	font-size: 14px;
	border-bottom-left-radius: 0;
	border-bottom-right-radius: 0;

	svg {
		width: 13px;
		margin-right: 5px;
	}
`;
