import styled from 'styled-components';
import { StyledAddButton } from '../Buttons/AddSectionButton/styles';

export const StyledPlayBar = styled.div`
	position: fixed;
	bottom: 0;
	background: var(--off-background);
	width: 100%;
`;
export const PlayButton = styled(StyledAddButton)`
	border-radius: 100%;
`;

export const OtherButtons = styled.div`
	display: flex;
	color: var(--foreground);
`;
