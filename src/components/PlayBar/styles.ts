import styled from 'styled-components';
import { StyledAddButton } from '../Buttons/AddSectionButton/styles';
import PlayIcon from '../Icons/PlayIcon';

export const StyledPlayBar = styled.div`
	position: fixed;
	bottom: 0;
	background: var(--off-background);
	width: 100%;
	&:before {
		content: '';
		position: absolute;
		top: -20px;
		background: var(--off-background);
		border-radius: 100%;
		width: 200%;
		height: 300px;
		left: -50%;
		z-index: -1;
	}
`;
export const PlayButton = styled(StyledAddButton)`
	border-radius: 100%;
	position: absolute;
	top: -60px;
	left: 50%;
	transform: translateX(-50%);
	.play-icon {
		margin-left: 4px;
	}
	&:disabled {
		background: var(--background);
		cursor: not-allowed;
		color: var(--foreground);
	}
`;

export const OtherButtons = styled.div`
	padding: 50px 20px;
	display: flex;
	justify-content: space-between;
	color: var(--foreground);
`;

export const OtherButton = styled.button`
	border: 0;
	color: var(--foreground);
	background: transparent;
	cursor: pointer;
	font-size: 14px;
	text-transform: uppercase;
	font-weight: bold;
`;
