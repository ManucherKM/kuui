// Types
import type { FC, InputHTMLAttributes } from 'react'

// Utils
import clsx from 'clsx'

// Styles
import classes from './Radio.module.scss'

/** Enumeration of possible Radio dimension. */
export enum ERadioDimension {
	/** Large size */
	large = 'large',

	/** Medium size */
	medium = 'medium',

	/** Small size */
	small = 'small',
}

/** Allowable Radio types. */
export type TRadio = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>

/** Radio component interface. */
export interface IRadio extends TRadio {
	/** Radio size */
	dimension?: `${ERadioDimension}`
}

/**
 * The Radio component is a customized version of the classic HTML input with
 * attributes type="radio". Below is an example of its use.
 *
 * @example
 * 	;<Radio dimension="medium" />
 */
export const Radio: FC<IRadio> = ({
	dimension = ERadioDimension.small,
	className,
	...props
}) => {
	// Put all used style classes into the "styles" variable.
	const styles = clsx([classes.root, classes[dimension], className])

	return (
		<label className={styles}>
			<input type="radio" {...props} />
			<span />
		</label>
	)
}
