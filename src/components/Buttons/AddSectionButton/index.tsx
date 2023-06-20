import { useDispatch } from 'react-redux';
import { selectMode, setView } from '../../../store/appSlice';
import { ButtonAddon, ButtonAddonShape, StyledAddButton } from './styles';
import { useAppSelector } from '../../../app/hooks';

interface Props {
	hasNoSections: boolean;
}

export default function AddSectionButton({ hasNoSections }: Props) {
	const dispatch = useDispatch();
	const mode = useAppSelector(selectMode);

	const addSection = () => {
		dispatch(setView('editSection'));
	};
	return mode === 'edit' ? (
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
	) : null;
}
