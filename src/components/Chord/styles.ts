import styled from 'styled-components';

interface StyledChordProps {
	readonly active: boolean;
}
export const StyledChord = styled.div<StyledChordProps>`
	background-color: ${({ active }) => (active ? 'red' : '#ddd')};
`;
export const ChordName = styled.div``;
export const ChordLength = styled.div``;
