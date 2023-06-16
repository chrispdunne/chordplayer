import styled from 'styled-components';

interface StyledChordProps {
	readonly active: boolean;
}
export const StyledChord = styled.div<StyledChordProps>`
	background-color: ${({ active }) => (active ? '#fff' : '#000')};
	color: ${({ active }) => (active ? '#000' : '#fff')};
	border-radius: 4px;
`;
export const ChordName = styled.div``;
export const ChordLength = styled.div``;
