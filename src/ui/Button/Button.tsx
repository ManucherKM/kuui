// Types
import type { ButtonHTMLAttributes, FC } from 'react'

// Utils
import clsx from 'clsx'

// Styles
import classes from './Button.module.scss'

/**
 * Enumeration of possible Button variants.
 */
export enum EButton {
	active = 'active',
	passive = 'passive',
	navigate = 'navigate',
}

/**
 * Enumeration of possible Button dimension.
 */
export enum EButtonDimension {
	large = 'large',
	medium = 'medium',
	small = 'small',
}

/**
 * Button component interface.
 */
export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: `${EButton}`
	dimension?: `${EButtonDimension}`
}

/**
 * The Button component is an extended version of the classic HTML button, with added styling. Below you can see an example of its use.
 * @example
 * <Button variant="active" dimension="small">Click me</Button>
 * <Button disabled>Click me</Button>
 */
export const Button: FC<IButton> = ({
	children,
	variant = EButton.passive,
	dimension = EButtonDimension.small,
	...props
}) => {
	// Put all used style classes into the "styles" variable.
	const styles = clsx([classes.button, classes[variant], classes[dimension]])

	return (
		<button className={styles} {...props}>
			{children}
		</button>
	)
}
