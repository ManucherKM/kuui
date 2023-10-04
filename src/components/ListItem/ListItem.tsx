// Types
import { FC, ReactNode } from 'react'
import type { LinkProps } from 'react-router-dom'

// Utils
import clsx from 'clsx'

// Styles
import classes from './ListItem.module.scss'

// Components
import { Link } from 'react-router-dom'

/** Enumeration of possible ListItem positions. */
export enum EListItemAlign {
	left = 'left',
	center = 'center',
	right = 'right',
}

/** ListItem component interface. */
export interface IListItem extends LinkProps {
	icon: ReactNode
	title: string
	align?: `${EListItemAlign}`
}

/**
 * The ListItem component is a Link component from the react-router-dom package
 * with some styling added. Below you can see an example of its use.
 *
 * @example
 * 	;<ListItem to="#" icon={<svg></svg>} title="Title">
 * 		Link
 * 	</ListItem>
 */
export const ListItem: FC<IListItem> = ({
	children,
	className,
	title,
	icon,
	align = EListItemAlign.left,
	...props
}) => {
	// Put all used style classes into the "styles" variable.
	const styles = clsx([classes.root, classes[align], className])

	return (
		<Link className={styles} {...props}>
			{icon}
			<span className={classes.title}>{title}</span>
		</Link>
	)
}
