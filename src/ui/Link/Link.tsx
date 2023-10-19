// Types
import type { FC } from 'react'
import type { LinkProps } from 'react-router-dom'

// Utils
import clsx from 'clsx'

// Styles
import classes from './Link.module.scss'

// Componets
import { Link as RRDLink } from 'react-router-dom'

/** Enumeration of possible Link dimension. */
export enum ELinkDimension {
	/** Large size */
	large = 'large',

	/** Medium size */
	medium = 'medium',

	/** Small size */
	small = 'small',

	/** ExtraSmall size */
	extraSmall = 'extraSmall',
}

/** Enumeration of possible Link positions. */
export enum ELinkAlign {
	/** Align left */
	left = 'left',

	/** Align center */
	center = 'center',

	/** Align right */
	right = 'right',
}

/** Allowable Link types. */
export type TLink = LinkProps

/** Link component interface. */
export interface ILink extends TLink {
	/** Right size */
	dimension?: `${ELinkDimension}`

	/** Align */
	align?: `${ELinkAlign}`
}

/**
 * The Link component is the Link component from the "react-router-dom" package
 * with some styling added. Below you can see an example of its use.
 *
 * @example
 * 	;<Link to="#" dimension="small">
 * 		Link
 * 	</Link>
 */
export const Link: FC<ILink> = ({
	children,
	dimension = ELinkDimension.small,
	align = ELinkAlign.left,
	className,
	...props
}) => {
	// Put all used style classes into the "styles" variable.
	const styles = clsx([
		classes.root,
		classes[dimension],
		classes[align],
		className,
	])

	return (
		<RRDLink className={styles} {...props}>
			{children}
		</RRDLink>
	)
}
