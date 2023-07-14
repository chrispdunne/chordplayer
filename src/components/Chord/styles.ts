import styled from 'styled-components';

interface StyledChordProps {
	readonly active: boolean;
	readonly length: number;
	readonly isFaded?: boolean;
}
export const StyledChord = styled.div<StyledChordProps>`
	background-color: ${({ active }) =>
		active ? 'var(--foreground)' : 'var(--background)'};
	color: ${({ active }) =>
		active ? 'var(--background)' : 'var(--foreground)'};
	border-radius: 6px;
	padding: 20px 4px;
	font-size: 14px;
	font-weight: bold;
	text-transform: uppercase;
	display: flex;
	justify-content: center;
	align-items: center;
	grid-column: ${({ length }) => `span ${length}`};
	opacity: ${({ isFaded }) => (isFaded ? 0.5 : 1)};
`;
export const ChordName = styled.div``;
export const ChordKey = styled.span``;
export const ChordFlavour = styled.span`
	text-transform: initial;
`;
