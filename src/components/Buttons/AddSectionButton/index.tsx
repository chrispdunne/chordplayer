import { useDispatch } from 'react-redux';
import { setView } from '../../../store/appSlice';
import { ButtonAddon, ButtonAddonShape, StyledAddButton } from './styles';

interface Props {
	hasNoSections: boolean;
}

export default function AddSectionButton({ hasNoSections }: Props) {
	const dispatch = useDispatch();
	const addSection = () => {
		dispatch(setView('editSection'));
	};
	return (
		<>
			<StyledAddButton
				className="add-section-button"
				hasNoSections={hasNoSections}
				onClick={addSection}
				title="Add section"
				aria-label="Add section"
			>
				+{' '}
				{hasNoSections && (
					<ButtonAddon>
						<ButtonAddonShape />
						Add Section
					</ButtonAddon>
				)}
			</StyledAddButton>
		</>
	);
}
