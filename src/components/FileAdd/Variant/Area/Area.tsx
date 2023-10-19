// Types
import type { FC, InputHTMLAttributes } from 'react'

// Utils
import clsx from 'clsx'

// Styles
import classes from './Area.module.scss'

// Icons
import { Plus } from '@/assets/icons'

/** Enumeration of possible Area fill variants. */
export enum EAreaFill {
	/** Fills all available space. */
	all = 'all',

	/** Fills a fixed space from the available space. */
	fixed = 'fixed',
}

/** Allowable Area types. */
export type TArea = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>

/** Area component interface. */
export interface IArea extends TArea {
	/** Options for filling available space. */
	fill?: `${EAreaFill}`
}

/**
 * Using the Area component, you can get the files selected by the user. Below
 * is an example of its use.
 *
 * @example
 * 	;<Area onChange={e => console.log(e.target.files)} />
 */
export const Area: FC<IArea> = ({
	className,
	fill = EAreaFill.all,
	...props
}) => {
	// Put all used style classes into the "styles" variable.
	const styles = clsx([classes.root, classes[fill], className])

	return (
		<label className={styles}>
			<Plus width="24px" height="24px" className={classes.plus} />
			<input className={classes.input} type="file" {...props} />
		</label>
	)
}
