import { ButtonHTMLAttributes, FC } from 'react'
import classes from './Button.module.scss'
import clsx from 'clsx'

export enum EButton {
	active = 'active',
	passive = 'passive',
	navigate = 'navigate',
}

export enum EButtonDimension {
	large = 'large',
	medium = 'medium',
	small = 'small',
}

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: `${EButton}`
	dimension?: `${EButtonDimension}`
}

const Button: FC<IButton> = ({
	children,
	variant = EButton.passive,
	dimension = EButtonDimension.small,
	...props
}) => {
	const styles = clsx([classes.button, classes[variant], classes[dimension]])

	return (
		<button className={styles} {...props}>
			{children}
		</button>
	)
}

export default Button
