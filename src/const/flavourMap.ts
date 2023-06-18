import { FlavourEnum } from '../types';

export const flavourMap: Record<FlavourEnum, string> = {
	[FlavourEnum.Major]: '',
	[FlavourEnum.Minor]: 'm',
	[FlavourEnum.Diminished]: '°',
	[FlavourEnum.Augmented]: '+',
	[FlavourEnum.Minor7]: 'm7',
	[FlavourEnum.Major7]: 'M7',
	[FlavourEnum.Dominant7]: '7',
	[FlavourEnum.Diminished7]: '°7',
	[FlavourEnum.Augmented7]: '+7',
	[FlavourEnum.HalfDiminished7]: 'ø7',
	[FlavourEnum.Minor9]: 'm9',
	[FlavourEnum.Major9]: 'M9',
	[FlavourEnum.Dominant9]: '9',
	[FlavourEnum.Minor11]: 'm11',
	[FlavourEnum.Major11]: 'M11'
};
