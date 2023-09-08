// Types
import type { FC, InputHTMLAttributes } from 'react'

// Utils
import clsx from 'clsx'

// Styles
import classes from './Input.module.scss'

/**
 * Enumeration of possible Input variants.
 */
export enum EInput {
	default = 'default',
}

/**
 * An enumeration of possible space filling by the Input component.
 */
export enum EInputFill {
	fixed = 'fixed',
	all = 'all',
}

/**
 * Allowable Input types.
 */
export type TInput = InputHTMLAttributes<HTMLInputElement>

/**
 * Input component interface.
 */
export interface IInput extends TInput {
	variant?: `${EInput}`
	fill?: `${EInputFill}`
}

/**
 * The Input component is a classic HTML "input" tag with some styles added. Below you can see an example of its use.
 * @example
 * <Input onChange={console.log} />
 */
export const Input: FC<IInput> = ({
	variant = EInput.default,
	fill = EInputFill.fixed,
	className,
	...props
}) => {
	// Put all used style classes into the "styles" variable.
	const styles = clsx([
		classes.input,
		classes[variant],
		classes[fill],
		className,
	])

	return <input className={styles} {...props} />
}
