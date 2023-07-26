// Types
import type { FC, HTMLAttributes } from 'react'

// Styles
import classes from './Popup.module.scss'

/**
 * Allowable Popup types.
 */
export type TPopup = Omit<HTMLAttributes<HTMLDivElement>, 'className'>

/**
 * Popup component interface.
 */
export interface IPopup extends TPopup {}

/**
 * The Popup component is a popup window. Below you can see an example of its use.
 * @example
 * <Popup>
 * 	<Button />
 * </Popup>
 */
export const Popup: FC<IPopup> = ({ children, ...props }) => {
	return (
		<div className={classes.wrapper}>
			<div className={classes.content} {...props}>
				{children}
			</div>
		</div>
	)
}
