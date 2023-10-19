// Types
import type { FC, HTMLAttributes, ReactNode } from 'react'

// Styles
import classes from './Item.module.scss'

// Utils
import { getTabIndex } from '@/utils'
import clsx from 'clsx'

// Icons
import { Arrow } from '@/assets/icons'

/** Allowable Item types. */
export type TItem = HTMLAttributes<HTMLDivElement>

/** IItem component interface. */
export interface IItem extends TItem {
	/** Title of the accordion element. */
	name: ReactNode
}

/**
 * The Item component is a child component of the Accordion. Below is an example
 * of its use.
 *
 * @example
 * 	;<Item name="What's that?">
 * 		Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed,
 * 		praesentium.
 * 	</Item>
 */
export const Item: FC<IItem> = ({
	name,
	children,
	className,
	tabIndex = getTabIndex(),
	...props
}) => {
	// Put all used style classes into the "styles" variable.
	const styles = clsx([classes.root, className])

	return (
		<div className={styles} tabIndex={tabIndex} {...props}>
			<div className={classes.wrapperTitle}>
				<span className={classes.title}>{name}</span>
				<Arrow />
			</div>
			<div className={classes.wrapperSubtitle}>{children}</div>
		</div>
	)
}
