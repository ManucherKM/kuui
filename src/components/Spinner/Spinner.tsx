// Types
import type { ISpinnerSVG } from '@/assets/icons'
import type { FC } from 'react'

// Utils
import clsx from 'clsx'

// Styles
import classes from './Spinner.module.scss'

// Icons
import * as icons from '@/assets/icons'

/** Enumeration of possible Spinner dimension. */
export enum ESpinnerDimension {
	large = 'large',
	medium = 'medium',
	small = 'small',
}

/** Spinner component interface. */
export interface ISpinner extends ISpinnerSVG {
	dimension?: `${ESpinnerDimension}`
}

/**
 * The Spinner component is an HTML svg element with specific styles. Below you
 * can see an example of its use.
 *
 * @example
 * 	;<Spinner dimension="small" />
 */
export const Spinner: FC<ISpinner> = ({
	dimension = ESpinnerDimension.medium,
	className,
	...props
}) => {
	// Put all used style classes into the "styles" variable.
	const styles = clsx([classes.root, classes[dimension], className])

	return <icons.SpinnerSVG className={styles} {...props} />
}
