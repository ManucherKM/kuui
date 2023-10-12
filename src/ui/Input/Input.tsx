// Types
import { forwardRef } from 'react'
import type { IOTP } from './Variant/OTP/OTP'
import type { IPassword } from './Variant/Password/Password'
import type { IText } from './Variant/Text/Text'

// Components
import { OTP } from './Variant/OTP/OTP'
import { Password } from './Variant/Password/Password'
import { Text } from './Variant/Text/Text'

/** Enumeration of possible Input variants. */
export enum EInputVariant {
	text = 'text',
	password = 'password',
	OTP = 'OTP',
}

/** Interface for Input with the "text" variant. */
export interface IInputText extends IText {
	variant: `${EInputVariant}`
}

/** Interface for Input with the "password" variant. */
export interface IInputPassword extends IPassword {
	variant: `${EInputVariant}`
}

/** Interface for Input with the "OTP" variant. */
export interface IInputOTP extends IOTP {
	variant: `${EInputVariant}`
}

/** Type for the Input component. */
export type TInput = IInputPassword | IInputText | IInputOTP

/**
 * The Input component is an extended version of the classic HTML input, with
 * added styling. Below you can see an example of its use.
 *
 * @example
 * 	;<Input variant="text" onChange={e => console.log(e.target.value)} />
 */
export const Input = forwardRef<HTMLInputElement, TInput>(
	({ variant, ...props }, ref) => {
		return (
			<>
				{variant === EInputVariant.text && (
					<Text ref={ref} {...(props as IText)} />
				)}
				{variant === EInputVariant.password && (
					<Password ref={ref} {...(props as IPassword)} />
				)}
				{variant === EInputVariant.OTP && <OTP {...(props as IOTP)} />}
			</>
		)
	},
)
