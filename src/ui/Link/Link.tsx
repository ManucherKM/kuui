// Types
import type { AnchorHTMLAttributes, FC } from 'react'

// Utils
import clsx from 'clsx'

// Styles
import classes from './Link.module.scss'

/** Enumeration of possible Link dimension. */
export enum ELinkDimension {
	large = 'large',
	medium = 'medium',
	small = 'small',
	extraSmall = 'extraSmall',
}

/** Enumeration of possible Link positions. */
export enum ELinkAlign {
	left = 'left',
	center = 'center',
	right = 'right',
}

/** Allowable Link types. */
export type TLink = AnchorHTMLAttributes<HTMLAnchorElement>

/** Link component interface. */
export interface ILink extends TLink {
	dimension?: `${ELinkDimension}`
	align?: `${ELinkAlign}`
}

/**
 * The Link component is a classic HTML "a" tag with some styles added. Below
 * you can see an example of its use.
 *
 * @example
 * 	;<Link href="#" dimension="small">
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
		<a className={styles} {...props}>
			{children}
		</a>
	)
}
