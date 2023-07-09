import { ButtonHTMLAttributes, FC } from 'react'
import classes from './Button.module.scss'
import clsx from 'clsx'

enum EButton {
	active = 'active',
	passive = 'passive',
	navigate = 'navigate',
}

enum EButtonSize {
	large = 'large',
	medium = 'medium',
	small = 'small',
}

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: `${EButton}`
	size?: `${EButtonSize}`
}

const Button: FC<IButton> = ({ children, variant = EButton.passive, size = EButtonSize.small, ...props }) => {
	const styles = clsx([classes.button, classes[variant], classes[size]])

	return (
		<button className={styles} {...props}>
			{children}
		</button>
	)
}

export default Button
