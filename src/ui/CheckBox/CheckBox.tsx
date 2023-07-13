import { FC } from 'react'
import { InputHTMLAttributes } from 'react'
import Box, { EBoxDimension } from './Variant/Box/Box'
import Text, { ETextDimension } from './Variant/Text/Text'

type ECheckBoxDimension = EBoxDimension | ETextDimension

enum ECheckBoxVariant {
	box = 'box',
	text = 'text',
}

interface ICheckBox extends InputHTMLAttributes<HTMLInputElement> {
	variant?: `${ECheckBoxVariant}`
	dimension?: `${ECheckBoxDimension}`
}

const CheckBox: FC<ICheckBox> = ({ variant = ECheckBoxVariant.box, ...props }) => {
	return (
		<>
			{variant === ECheckBoxVariant.box && <Box {...props} />}
			{variant === ECheckBoxVariant.text && <Text {...props} />}
		</>
	)
}

export default CheckBox
