// Types
import type { FC, HTMLAttributes } from 'react'

// Utils
import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

// Styles
import classes from './Alert.module.scss'

/** Enumeration of possible Alert positions. */
export enum EAlertAlign {
	/** Aligns the element to the left. */
	left = 'left',

	/** Aligns the element to the center. */
	center = 'center',

	/** Aligns the element to the right. */
	right = 'right',
}

/** Enumeration of possible Alert variants. */
export enum EAlertVariant {
	/**
	 * Option "message" with which you can notify the user about any action. For
	 * example, that the text was copied to the clipboard.
	 */
	message = 'message',

	/**
	 * The “error” option can be used to notify the user that an error has
	 * occurred. For example, it was not possible to send data to the server.
	 */
	error = 'error',
}

/** Enumeration possible options for the appearance of Alert. */
export enum EAlertAppearance {
	/** Causes an animation to appear on top. */
	above = 'above',

	/** Causes an animation to appear from below. */
	fromBelow = 'fromBelow',
}

/** Alert component interface. */
export interface IAlert extends HTMLAttributes<HTMLDivElement> {
	variant?: `${EAlertVariant}`
	appearance?: `${EAlertAppearance}`
	align?: `${EAlertAlign}`
	text: string
	time: number
	onTimeUp?: () => void
}
/**
 * Using the Alert component, you can show the user an error or notify him that
 * an action has taken place. Below is an example of its use.
 *
 * @example
 * 	;<Alert text="Unexpected server error." time={6} />
 */
export const Alert: FC<IAlert> = ({
	text,
	variant = EAlertVariant.message,
	appearance = EAlertAppearance.above,
	className,
	align = EAlertAlign.center,
	time,
	onTimeUp,
	...props
}) => {
	// State to control rendering.
	const [isRender, setIsRender] = useState<boolean>(true)

	// Put all used style classes into the "styles" variable.
	const styles = clsx([
		classes.root,
		classes[variant],
		classes[appearance],
		classes[align],
		className,
	])

	// When mounting a component, we start a timer at the end of which the component will need to be removed.
	useEffect(() => {
		// Let's start the timer.
		setTimeout(() => {
			// Change the value of the render state.
			setIsRender(false)

			// If the end user passed a function handler to know when the time has passed.
			if (onTimeUp) {
				// Call the function.
				onTimeUp()
			}
		}, time * 1000)
	}, [isRender])
	return (
		<>
			{isRender &&
				createPortal(
					<div className={styles} {...props}>
						<span className={classes.text}>{text}</span>
					</div>,
					document.body,
				)}
		</>
	)
}
