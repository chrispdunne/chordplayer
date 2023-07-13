import styled from 'styled-components';
import {
	aboveMobile,
	aboveTablet,
	desktop,
	largeDesktop
} from '../../const/styles';

export const StyledSection = styled.div`
	background-color: var(--off-background);
	color: var(--foreground);
	border-radius: 7px;
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 10px;
	padding: 9px;
	margin: 52px 4px 40px 12px;
	position: relative;
	@media only screen and (min-width: ${aboveMobile}) {
		grid-template-columns: repeat(3, 1fr);
	}
	@media only screen and (min-width: ${aboveTablet}) {
		grid-template-columns: repeat(4, 1fr);
	}
	@media only screen and (min-width: ${desktop}) {
		grid-template-columns: repeat(5, 1fr);
	}
	@media only screen and (min-width: ${largeDesktop}) {
		grid-template-columns: repeat(6, 1fr);
	}
`;
