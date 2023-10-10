// Types
import type { FC, FocusEvent, InputHTMLAttributes } from 'react'

// Utils
import clsx from 'clsx'
import { forwardRef, useState } from 'react'

// Styles
import classes from './Password.module.scss'

// Icons
import * as icons from '@/assets/icons'

/** Enumeration of possible Password fill variants. */
export enum EPasswordFill {
	fixed = 'fixed',
	all = 'all',
}

/** Allowable Password types. */
export type TPassword = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>

/** Password component interface. */
export interface IPassword extends TPassword {
	fill?: `${EPasswordFill}`
}

/** Valid input types for the component Password. */
type InputTypes = 'password' | 'text'

/**
 * The Password component is an extended version of the classic HTML input with
 * type "password", with added styling. Below you can see an example of its
 * use.
 *
 * @example
 * 	;<Password fill="all" onChange={e => console.log(e.target.value)} />
 */
export const Password = forwardRef<HTMLInputElement, IPassword>(
	(
		{ fill = EPasswordFill.fixed, onFocus, onBlur, className, ...props },
		ref,
	) => {
		// State for tracking input activity.
		const [isActive, setIsActive] = useState<boolean>(false)

		// The state of valid types for input.
		const [type, setType] = useState<InputTypes>('password')

		/** Function handler for changing the input type. */
		function changeInputTypeHandler() {
			if (type === 'password') {
				setType('text')
			} else {
				setType('password')
			}
		}

		/** Focus handler function for input. */
		function inputFocusHandler(e: FocusEvent<HTMLInputElement>) {
			// If the end user also added a handler for the focus event.
			if (onFocus) {
				// Let's call this function.
				onFocus(e)
			}

			// Change the activity state of the input.
			setIsActive(true)
		}

		/** Blur handler function for input. */
		function inputBlurHandler(e: FocusEvent<HTMLInputElement>) {
			// If the end user also added a handler for the blur event.
			if (onBlur) {
				// Let's call this function.
				onBlur(e)
			}

			// Change the activity state of the input.
			setIsActive(false)
		}

		// Place all used style classes for the label into the “styles” variable.
		const stylesLabel = clsx([
			classes.root,
			classes[fill],
			isActive && classes.active,
			className,
		])

		return (
			<label className={stylesLabel}>
				<input
					ref={ref}
					onFocus={inputFocusHandler}
					onBlur={inputBlurHandler}
					className={classes.input}
					type={type}
					{...props}
				/>
				{type === 'password' ? (
					<icons.СrossedEye
						onClick={changeInputTypeHandler}
						className={classes.eye}
						width="20px"
						height="20px"
					/>
				) : (
					<icons.Eye
						onClick={changeInputTypeHandler}
						className={classes.eye}
						width="20px"
						height="20px"
					/>
				)}
			</label>
		)
	},
)
