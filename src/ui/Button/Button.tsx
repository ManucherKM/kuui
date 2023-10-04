// Types
import type { ButtonHTMLAttributes, FC } from 'react'

// Utils
import clsx from 'clsx'

// Styles
import classes from './Button.module.scss'

/** Enumeration of possible Button variants. */
export enum EButtonVariant {
	active = 'active',
	passive = 'passive',
	navigate = 'navigate',
}

/** Enumeration of possible Button dimension. */
export enum EButtonDimension {
	large = 'large',
	medium = 'medium',
	small = 'small',
}

/** Allowable Button types. */
export type TButton = ButtonHTMLAttributes<HTMLButtonElement>

/** Button component interface. */
export interface IButton extends TButton {
	variant?: `${EButtonVariant}`
	dimension?: `${EButtonDimension}`
}

/**
 * The Button component is an extended version of the classic HTML button, with
 * added styling. Below you can see an example of its use.
 *
 * @example
 * 	;<Area onClick={console.log} />
 */
export const Button: FC<IButton> = ({
	variant = EButtonVariant.passive,
	dimension = EButtonDimension.small,
	children,
	className,
	...props
}) => {
	// Put all used style classes into the "styles" variable.
	const styles = clsx([
		classes.root,
		classes[variant],
		classes[dimension],
		className,
	])

	return (
		<button className={styles} {...props}>
			{children}
		</button>
	)
}
