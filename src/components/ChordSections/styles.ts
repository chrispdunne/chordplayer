import styled from 'styled-components';

interface ContainerProps {
	readonly hasNoSections: boolean;
}
export const Container = styled.div<ContainerProps>`
	display: flex;
	flex-direction: column;
	height: calc(100vh - 92px);
	overflow-y: scroll;
	${({ hasNoSections }) => (hasNoSections ? 'justify-content: center;' : '')}
`;
