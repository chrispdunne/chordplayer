import { ReactNode } from 'react';
import BinIcon from '../../Icons/BinIcon';
import { StyledDeleteButton } from './styles';

interface Props {
	children?: ReactNode;
	confirmMessage?: string;
	onClick: () => void;
	title: string;
}
export default function DeleteButton({
	children,
	onClick,
	confirmMessage,
	title
}: Props) {
	const msg = confirmMessage || 'Are you sure you want to delete this?';
	const handleDelete = () => {
		const confirmed = window.confirm(msg);
		if (confirmed) {
			onClick();
		}
	};
	return (
		<StyledDeleteButton
			onClick={handleDelete}
			title={title}
			aria-label={title}
		>
			<BinIcon /> {children}
		</StyledDeleteButton>
	);
}
