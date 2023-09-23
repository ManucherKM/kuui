// Types
import type { FC, HTMLAttributes } from 'react'

// Styles
import classes from './Popup.module.scss'
import clsx from 'clsx'

/** Allowable Popup types. */
export type TPopup = HTMLAttributes<HTMLDivElement>

/** Popup component interface. */
export interface IPopup extends TPopup {
	onClose?: () => void
}

/**
 * The Popup component is a popup window. Below you can see an example of its
 * use.
 *
 * @example
 * 	;<Popup>
 * 		<Button />
 * 	</Popup>
 */
export const Popup: FC<IPopup> = ({
	children,
	onClose,
	className,
	...props
}) => {
	function clickHandler() {
		if (onClose) {
			onClose()
		}
	}

	const contentStyles = clsx([classes.content, className])

	return (
		<div onClick={clickHandler} className={classes.wrapper}>
			<div className={contentStyles} {...props}>
				{children}
			</div>
		</div>
	)
}
