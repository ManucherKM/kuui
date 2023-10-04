// Types
import type { FC } from 'react'
import type { IPassword } from './Variant/Password/Password'
import type { IText } from './Variant/Text/Text'

// Components
import { Password } from './Variant/Password/Password'
import { Text } from './Variant/Text/Text'

/** Enumeration of possible Input variants. */
export enum EInputVariant {
	text = 'text',
	password = 'password',
}

/** Interface for Input with the "text" variant. */
export interface IInputText extends IText {
	variant: `${EInputVariant}`
}

/** Interface for Input with the "password" variant. */
export interface IInputPassword extends IPassword {
	variant: `${EInputVariant}`
}

/** Type for the Input component. */
export type TInput = IInputPassword | IInputText

/**
 * The Input component is an extended version of the classic HTML input, with
 * added styling. Below you can see an example of its use.
 *
 * @example
 * 	;<Input variant="text" onChange={e => console.log(e.target.value)} />
 */
export const Input: FC<TInput> = ({ variant, ...props }) => {
	return (
		<>
			{variant === EInputVariant.text && <Text {...(props as IText)} />}
			{variant === EInputVariant.password && (
				<Password {...(props as IPassword)} />
			)}
		</>
	)
}
