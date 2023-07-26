// Types
import type { FC } from 'react'
import type { IBox } from './Variant/Box/Box'
import type { IText } from './Variant/Text/Text'

// Components
import { Box } from './Variant/Box/Box'
import { Text } from './Variant/Text/Text'

/**
 * Enumeration of possible CheckBox variants.
 */
export enum ECheckBoxVariant {
	box = 'box',
	text = 'text',
}

/**
 * CheckBox component interface.
 */
export interface ICheckBox extends IBox, IText {
	variant: `${ECheckBoxVariant}`
}

/**
 * The CheckBox component is a customized version of the classic HTML input with attributes type="checkbox". Below is an example of its use.
 * @example
 * <CheckBox variant="text" checked/>
 */
export const CheckBox: FC<ICheckBox> = ({ variant, ...props }) => {
	return (
		<>
			{variant === ECheckBoxVariant.box && <Box {...props} />}
			{variant === ECheckBoxVariant.text && <Text {...props} />}
		</>
	)
}
