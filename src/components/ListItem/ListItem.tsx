import {
	FC,
	ForwardRefExoticComponent,
	HTMLAttributes,
	ReactNode,
	RefAttributes,
} from 'react'
import classes from './ListItem.module.scss'
import clsx from 'clsx'
import { Link, LinkProps } from 'react-router-dom'

export enum EAlignListItem {
	left = 'left',
	center = 'center',
	right = 'right',
}

export interface IListItem extends LinkProps {
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
		<Link className={styles} {...props}>
			{svgIcon}
			<span className={classes.title}>{title}</span>
		</Link>
	)
}
