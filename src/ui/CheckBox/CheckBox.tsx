// Types
import type { FC } from 'react'
import type { IBox } from './Variant/Box/Box'
import type { IText } from './Variant/Text/Text'

// Components
import { Box } from './Variant/Box/Box'
import { Text } from './Variant/Text/Text'

/** Enumeration of possible CheckBox variants. */
export enum ECheckBoxVariant {
	box = 'box',
	text = 'text',
}

/** Interface for CheckBox with the "text" variant. */
export interface ICheckBoxVariantText extends IText {
	variant: `${ECheckBoxVariant}`
}

/** Interface for CheckBox with the "box" variant. */
export interface ICheckBoxVariantBox extends IBox {
	variant: `${ECheckBoxVariant}`
}

/** Type for the CheckBox component. */
export type TCheckBox = ICheckBoxVariantText | ICheckBoxVariantBox

/**
 * The CheckBox component is a customized version of the classic HTML input with
 * attributes type="checkbox". Below is an example of its use.
 *
 * @example
 * 	;<CheckBox variant="text" checked />
 */
export const CheckBox: FC<TCheckBox> = ({ variant, ...props }) => {
	return (
		<>
			{variant === ECheckBoxVariant.box && <Box {...(props as IBox)} />}
			{variant === ECheckBoxVariant.text && <Text {...(props as IText)} />}
		</>
	)
}
