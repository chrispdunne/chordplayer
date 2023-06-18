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
	${({ hasNoSections }) =>
		hasNoSections === false &&
		css`
			margin-bottom: 100px;
		`}
`;
