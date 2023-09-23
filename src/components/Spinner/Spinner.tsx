// Types
import type { FC, SVGAttributes } from 'react'

// Utils
import clsx from 'clsx'

// Styles
import classes from './Spinner.module.scss'

/** Enumeration of possible Spinner dimension. */
export enum ESpinnerDimension {
	large = 'large',
	medium = 'medium',
	small = 'small',
}

/** Allowable SVG types. */
export type SVGSpinnerTypes = Omit<
	SVGAttributes<SVGSVGElement>,
	'xmlns' | 'viewBox'
>

/** Spinner component interface. */
export interface ISpinner extends SVGSpinnerTypes {
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
	const styles = clsx([classes.spinner, classes[dimension], className])

	return (
		<svg
			viewBox="0 0 32 32"
			xmlns="http://www.w3.org/2000/svg"
			className={styles}
			{...props}
		>
			<path d="M31 16C31 13.0333 30.1203 10.1332 28.472 7.66645C26.8238 5.19971 24.4811 3.27712 21.7403 2.14181C18.9994 1.00649 15.9834 0.709442 13.0736 1.28822C10.1639 1.867 7.49119 3.29561 5.3934 5.3934C3.29561 7.49119 1.867 10.1639 1.28822 13.0736C0.709442 15.9834 1.00649 18.9994 2.14181 21.7403C3.27712 24.4811 5.19971 26.8238 7.66645 28.472C10.1332 30.1203 13.0333 31 16 31" />
		</svg>
	)
}
