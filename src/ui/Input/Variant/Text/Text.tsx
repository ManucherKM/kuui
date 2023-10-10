// Types
import { forwardRef, type FC, type InputHTMLAttributes } from 'react'

// Utils
import clsx from 'clsx'

// Styles
import classes from './Text.module.scss'

/** Enumeration of possible Text fill variants. */
export enum ETextFill {
	fixed = 'fixed',
	all = 'all',
}

/** Allowable Text types. */
export type TText = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>

/** Text component interface. */
export interface IText extends TText {
	fill?: `${ETextFill}`
}

/**
 * The Text component is an extended version of the classic HTML input with type
 * "text", with added styling. Below you can see an example of its use.
 *
 * @example
 * 	;<Text fill="all" onChange={e => console.log(e.target.value)} />
 */
export const Text = forwardRef<HTMLInputElement, IText>(
	({ fill = ETextFill.fixed, className, ...props }, ref) => {
		// Put all used style classes into the "styles" variable.
		const styles = clsx([classes.root, classes[fill], className])

		return <input ref={ref} className={styles} type="text" {...props} />
	},
)
