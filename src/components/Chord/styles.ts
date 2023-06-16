import styled from 'styled-components';

interface StyledChordProps {
	readonly active: boolean;
}
export const StyledChord = styled.div<StyledChordProps>`
	background-color: ${({ active }) =>
		active ? 'var(--foreground)' : 'var(--background)'};
	color: ${({ active }) =>
		active ? 'var(--background)' : 'var(--foreground)'};
	border-radius: 4px;
	padding: 20px 4px;
	font-size: 14px;
	font-weight: bold;
	text-transform: uppercase;
	display: flex;
	justify-content: center;
	align-items: center;
`;
export const ChordName = styled.div``;
export const ChordLength = styled.div``;
