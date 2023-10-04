// Types
import { FC, HTMLAttributes } from 'react'

// Utils
import clsx from 'clsx'

// Styles
import classes from './Select.module.scss'

/** Select component interface. */
export interface ISelect extends HTMLAttributes<HTMLDivElement> {}

export const Select: FC<ISelect> = ({ children, className, ...props }) => {
	// Put all used style classes into the "styles" variable.
	const styles = clsx([classes.root, className])

	return (
		<div className={styles} {...props}>
			{children}
		</div>
	)
}
