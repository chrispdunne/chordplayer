import styled from 'styled-components';

export const StyledDeleteButton = styled.button`
	cursor: pointer;
	border: none;
	color: var(--foreground);
	font-weight: bold;
	font-size: 12px;
	text-transform: uppercase;
	margin: 20px 0;
	padding: 16px 10px;
	width: 100%;
	border-radius: 3px;
	background: var(--border-color);
	svg {
		width: 12px;
		height: 12px;
		margin: 0px 4px;
		position: relative;
		top: 1px;
	}
`;
