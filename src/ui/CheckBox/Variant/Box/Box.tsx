// Types
import type { FC, InputHTMLAttributes } from 'react'

// Utils
import clsx from 'clsx'

// Styles
import classes from './Box.module.scss'

/** Enumeration of possible Box dimension. */
export enum EBoxDimension {
	large = 'large',
	medium = 'medium',
	small = 'small',
}

/** Allowable Box types. */
export type TBox = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>

/** Box component interface. */
export interface IBox extends TBox {
	dimension?: `${EBoxDimension}`
}

/**
 * The Box component is a customized version of the classic HTML input with
 * attributes type="checkbox". Below is an example of its use.
 *
 * @example
 * 	;<Box dimension="medium" />
 */
export const Box: FC<IBox> = ({
	dimension = EBoxDimension.small,
	className,
	...props
}) => {
	// Put all used style classes into the "styles" variable.
	const styles = clsx([classes.root, classes[dimension], className])

	return (
		<label className={styles}>
			<input type="checkbox" {...props} />
			<span />
		</label>
	)
}
