// Types
import type { FC, HTMLAttributes, ReactNode } from 'react'

// Styles
import classes from './Item.module.scss'

// Utils
import { getTabIndex } from '@/utils/getTabIndex'
import clsx from 'clsx'

/** Allowable Item types. */
export type TItem = Omit<HTMLAttributes<HTMLDivElement>, 'tabIndex'>

/** IItem component interface. */
export interface IItem extends TItem {
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
export const Item: FC<IItem> = ({ name, children, className, ...props }) => {
	const styles = clsx([classes.item, className])

	return (
		<div className={styles} tabIndex={getTabIndex()} {...props}>
			<div className={classes.wrapper_title}>
				<span className={classes.title}>{name}</span>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 8">
					<path d="M10.9 1.1999C10.5 0.799902 9.89999 0.799902 9.49999 1.1999L5.99999 4.6999L2.49999 1.1999C2.09999 0.799902 1.49999 0.799902 1.09999 1.1999C0.699988 1.5999 0.699988 2.1999 1.09999 2.5999L5.29999 6.7999C5.49999 6.9999 5.69999 7.0999 5.99999 7.0999C6.29999 7.0999 6.49999 6.9999 6.69999 6.7999L10.9 2.5999C11.3 2.1999 11.3 1.5999 10.9 1.1999Z" />
				</svg>
			</div>
			<div className={classes.wrapper_subtitle}>{children}</div>
		</div>
	)
}
