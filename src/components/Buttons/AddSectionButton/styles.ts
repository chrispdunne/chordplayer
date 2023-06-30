import styled, { css } from 'styled-components';
import { PrimaryButton } from '../../../app/styles';

interface AddButtonProps {
	hasNoSections?: boolean;
}

export const StyledAddButton = styled(PrimaryButton)<AddButtonProps>`
	font-size: 43px;
	font-weight: bold;
	width: 50px;
	height: 50px;
	min-height: 50px;
	border-radius: 3px;
	margin: 20px auto;
	line-height: 0;
	position: relative;
	${({ hasNoSections }) =>
		hasNoSections
			? css`
					margin-bottom: 100px;
			  `
			: css`
					margin-bottom: 160px;
			  `}
`;

export const ButtonAddon = styled.div`
	position: absolute;
	display: block;
	left: 50%;
	top: 70px;
	border-radius: 3px;
	background: var(--orange);
	color: var(--orange-contrast);
	display: block;
	font-size: 12px;
	z-index: 1;
	padding: 10px 10px 10px;
	width: 100px;
	line-height: 1;
	transform: translateX(-50%);
	text-transform: uppercase;
`;

export const ButtonAddonShape = styled.div`
	position: absolute;
	top: -16px;
	left: 50%;
	transform: translateX(-50%);
	width: 8px;
	height: 8px;
	border-left: 8px solid transparent;
	border-top: 8px solid transparent;
	border-right: 8px solid transparent;
	border-bottom: 8px solid var(--orange);
	box-sizing: border-box;
`;
