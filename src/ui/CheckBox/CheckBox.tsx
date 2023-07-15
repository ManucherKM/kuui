import { FC } from 'react'
import Box, { IBox } from './Variant/Box/Box'
import Text, { IText } from './Variant/Text/Text'

export enum ECheckBoxVariant {
	box = 'box',
	text = 'text',
}

export interface ICheckBox extends IBox, IText {
	variant: `${ECheckBoxVariant}`
}

const CheckBox: FC<ICheckBox> = ({ variant, ...props }) => {
	return (
		<>
			{variant === ECheckBoxVariant.box && <Box {...props} />}
			{variant === ECheckBoxVariant.text && <Text {...props} />}
		</>
	)
}

export default CheckBox
