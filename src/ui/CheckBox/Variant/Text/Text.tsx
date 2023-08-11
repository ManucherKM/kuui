// Types
import type { ChangeEvent, FC, InputHTMLAttributes } from 'react'

// Utils
import clsx from 'clsx'
import { useState } from 'react'

// Styles
import classes from './Text.module.scss'

/**
 * Enumeration of possible Text dimension.
 */
export enum ETextDimension {
	large = 'large',
	medium = 'medium',
	small = 'small',
}

/**
 * Allowable Text types.
 */
export type TText = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>

/**
 * Text component interface.
 */
export interface IText extends TText {
	dimension?: `${ETextDimension}`
}

/**
 * The Text component is a customized version of the classic HTML input with attributes type="checkbox". Below is an example of its use.
 * @example
 * <Text dimension="medium"/>
 */
export const Text: FC<IText> = ({
	dimension = ETextDimension.small,
	onChange,
	...props
}) => {
	// Tracking the status of the input
	const [isChecked, setIsChecked] = useState<boolean | undefined>(props.checked)

	/*
		Create a handler function
		that will be executed every time
		the checked field of an input is changed.
	*/
	function changeHandler(e: ChangeEvent<HTMLInputElement> | undefined) {
		if (onChange && e) {
			onChange(e)
		}

		setIsChecked(p => !p)
	}

	// Put all used style classes into the "styles" variable.
	const styles = clsx([
		classes.text,
		classes[dimension],
		isChecked && classes.active,
	])

	return (
		<label className={styles}>
			<input type="checkbox" onChange={changeHandler} {...props} />
			<span>{isChecked ? 'On' : 'Off'}</span>
		</label>
	)
}
