import { ReactNode } from 'react';
import BinIcon from '../../Icons/BinIcon';
import { StyledDeleteButton } from './styles';

interface Props {
	children: ReactNode;
	onClick: () => void;
}
export default function DeleteButton({ children, onClick }: Props) {
	const handleDelete = () => {
		const confirmed = window.confirm(
			'Are you sure you want to delete this?'
		);
		if (confirmed) {
			onClick();
		}
	};
	return (
		<StyledDeleteButton onClick={handleDelete}>
			<BinIcon /> {children}
		</StyledDeleteButton>
	);
}
