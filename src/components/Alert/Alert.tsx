// Types
import type { FC, HTMLAttributes } from 'react'

// Utils
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import clsx from 'clsx'

// Styles
import classes from './Alert.module.scss'

/** Enumeration of possible Alert variants. */
export enum EAlertVariant {
	message = 'message',
	error = 'error',
}

/** Enumeration possible options for the appearance of Alert. */
export enum EAlertAppearance {
	above = 'above',
	fromBelow = 'fromBelow',
}

/** Alert component interface. */
export interface IAlert extends HTMLAttributes<HTMLDivElement> {
	variant?: `${EAlertVariant}`
	appearance?: `${EAlertAppearance}`
	text: string
	time: number
	onTimeUp?: () => void
}

export const Alert: FC<IAlert> = ({
	text,
	variant = EAlertVariant.message,
	appearance = EAlertAppearance.above,
	className,
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
