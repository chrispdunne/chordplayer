import { ReactNode } from 'react';
import BinIcon from '../../Icons/BinIcon';
import { StyledDeleteButton } from './styles';

interface Props {
	children: ReactNode;
	onClick: () => void;
}
export default function DeleteButton({ children, onClick }: Props) {
	return (
		<StyledDeleteButton onClick={onClick}>
			<BinIcon /> {children}
		</StyledDeleteButton>
	);
}
