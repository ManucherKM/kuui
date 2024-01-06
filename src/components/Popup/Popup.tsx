// Types
import { useEffect, useRef, type FC, type HTMLAttributes } from 'react'

// Utils
import clsx from 'clsx'
import { createPortal } from 'react-dom'

// Styles
import classes from './Popup.module.scss'

/** Allowable Popup types. */
export type TPopup = HTMLAttributes<HTMLDivElement>

/** Popup component interface. */
export interface IPopup extends TPopup {
	/** A handler function that fires when Popup disappears. */
	onClose?: () => void

	/** Clears the Popup of unnecessary blocks. */
	clear?: boolean
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
	onClose,
	children,
	className,
	clear = false,
	...props
}) => {
	const popupRef = useRef<HTMLDivElement | null>(null)

	/** Function handler for clicking on the background of the popup. */
	function clickHandler() {
		// If the user passed the function.
		if (onClose) {
			// Call the function.
			onClose()
		}
	}

	// We place the styles necessary for the content into a variable.
	const contentStyles = clsx([classes.content, className])

	useEffect(() => {
		if (!popupRef.current) return

		popupRef.current.scrollIntoView()
		document.body.style.overflow = 'hidden'

		return () => {
			document.body.style.removeProperty('overflow')
		}
	}, [])
	return (
		<>
			{createPortal(
				<div ref={popupRef} onClick={clickHandler} className={classes.wrapper}>
					{clear ? (
						children
					) : (
						<div className={contentStyles} {...props}>
							{children}
						</div>
					)}
				</div>,
				document.body,
			)}
		</>
	)
}
