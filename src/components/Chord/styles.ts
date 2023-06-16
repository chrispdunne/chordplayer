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
`;
export const ChordName = styled.div``;
export const ChordLength = styled.div``;
