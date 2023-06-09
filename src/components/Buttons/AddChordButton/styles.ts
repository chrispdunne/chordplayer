import styled, { css } from 'styled-components';
import {
	ButtonAddon,
	ButtonAddonShape,
	StyledAddButton
} from '../AddSectionButton/styles';

interface SACBProps {
	readonly doesSectionHaveChords: boolean;
}
export const StyledAddChordButton = styled(StyledAddButton)<SACBProps>`
	margin: 0;
	display: flex;
	justify-content: center;
	text-align: center;
	align-items: center;
	left: initial;

	${({ doesSectionHaveChords }) =>
		doesSectionHaveChords
			? css`
					width: 24px;
					height: 22px;
					min-height: 22px;
					position: absolute;
					bottom: 0;
					right: 0;
					border-bottom-left-radius: 0;
					border-top-right-radius: 0;
					outline-width: 0;
					font-size: 24px;
			  `
			: css`
					font-size: 28px;
					width: 24px;
					height: 24px;
					min-height: 24px;
			  `}
`;

export const ChordButtonAddon = styled(ButtonAddon)`
	transform: none;
	top: 0;
	left: 35px;
	padding: 6px;
`;
export const ChordButtonAddonShape = styled(ButtonAddonShape)`
	left: -8px;
	top: 50%;
	transform: translateY(-50%);
	border-right: 4px solid var(--orange);
	border-bottom: 4px solid transparent;
	border-top: 4px solid transparent;
	border-left: 4px solid transparent;
`;
