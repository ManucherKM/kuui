import { FC, HTMLAttributes } from 'react'
import classes from './Select.module.scss'
import clsx from 'clsx'

export interface ISelect extends HTMLAttributes<HTMLDivElement> {}

export const Select: FC<ISelect> = ({ className, children, ...props }) => {
	const styles = clsx([classes.wrapper, className])

	return (
		<div className={styles} {...props}>
			{children}
		</div>
	)
}
