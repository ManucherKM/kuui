// Types
import type { FC, InputHTMLAttributes } from 'react'

// Utils
import clsx from 'clsx'

// Styles
import classes from './Area.module.scss'

// Icons
import * as icons from '@/assets/icons'

/** Enumeration of possible Area fill variants. */
export enum EAreaFill {
	all = 'all',
	fixed = 'fixed',
}

/** Allowable Area types. */
export type TArea = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>

/** Area component interface. */
export interface IArea extends TArea {
	fill?: `${EAreaFill}`
}

/**
 * Using the Area component, you can get the files selected by the user. Below
 * is an example of its use.
 *
 * @example
 * 	<Area variant="active" dimension="small">Click me</Button>
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
			<icons.Plus width="24px" height="24px" className={classes.plus} />
			<input className={classes.input} type="file" {...props} />
		</label>
	)
}
