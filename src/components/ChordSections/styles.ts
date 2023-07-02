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
	margin-right: 3px;

	/* width */
	&::-webkit-scrollbar {
		width: 6px;
	}

	/* Track */
	&::-webkit-scrollbar-track {
		background: transparent;
		margin-bottom: 100px;
	}

	/* Handle */
	&::-webkit-scrollbar-thumb {
		background: var(--border-color);

		@media (min-width: 768px) {
			background: transparent;
		}
		opacity: 0.5;
		border-radius: 4px;
	}
	&:hover::-webkit-scrollbar-thumb {
		background: var(--border-color);
	}
	/* Handle on hover */
	&::-webkit-scrollbar-thumb:hover {
		background: var(--border-color-strong);
	}
`;
