import styled from 'styled-components';

export const StyledSection = styled.div`
	background-color: var(--off-black);
	color: #fff;
	border-radius: 7px;
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 1rem;
	padding: 2rem;
	margin: 1rem;
	position: relative;
`;

export const Loops = styled.div`
	grid-column: 1 / 3;
`;
