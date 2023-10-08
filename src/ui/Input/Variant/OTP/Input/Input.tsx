// Types
import type { FocusEvent, InputHTMLAttributes } from 'react'

// Utils
import clsx from 'clsx'
import { forwardRef, useState } from 'react'

// Styles
import classes from './Input.module.scss'

/** Allowable Input types. */
export type TInput = Omit<
	InputHTMLAttributes<HTMLInputElement>,
	'type' | 'maxLength'
>

/** Input component interface. */
export interface IInput extends TInput {}

export const Input = forwardRef<HTMLInputElement, TInput>((props, ref) => {
	const { className, onFocus, onBlur } = props

	const [isActive, setIsActive] = useState<boolean>(false)

	function focusHandler(e: FocusEvent<HTMLInputElement>) {
		if (onFocus) {
			onFocus(e)
		}

		setIsActive(true)
	}

	function blurHandler(e: FocusEvent<HTMLInputElement>) {
		if (onBlur) {
			onBlur(e)
		}

		setIsActive(false)
	}

	const styles = clsx([classes.root, isActive && classes.active, className])
	return (
		<label className={styles}>
			<span className={classes.text}>{(props.value as string)[0]}</span>
			<input
				onFocus={focusHandler}
				onBlur={blurHandler}
				className={classes.input}
				type="text"
				maxLength={1}
				ref={ref}
				{...props}
			/>
		</label>
	)
})
