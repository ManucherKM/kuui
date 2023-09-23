import { FC, HTMLAttributes, ReactNode } from 'react'
import classes from './ListItem.module.scss'
import clsx from 'clsx'

export enum EAlignListItem {
	center = 'center',
}

export interface IListItem extends HTMLAttributes<HTMLDivElement> {
	svgIcon: ReactNode
	title: string
	align: `${EAlignListItem}`
}

export const ListItem: FC<IListItem> = ({
	children,
	className,
	title,
	svgIcon,
	align,
	...props
}) => {
	const styles = clsx([classes.wrapper, classes[align], className])

	return (
		<div className={styles} {...props}>
			{svgIcon}
			<span className={classes.title}>{title}</span>
		</div>
	)
}
