import styled from 'styled-components';

interface ContainerProps {
	readonly hasNoSections: boolean;
}
export const Container = styled.div<ContainerProps>`
	display: flex;
	flex-direction: column;
	height: calc(100vh - 100px);
	${({ hasNoSections }) => (hasNoSections ? 'justify-content: center;' : '')}
`;
