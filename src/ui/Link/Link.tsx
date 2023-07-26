// Types
import type { FC, AnchorHTMLAttributes } from 'react'

// Utils
import clsx from 'clsx'

// Styles
import classes from './Link.module.scss'

/**
 * Enumeration of possible Link dimension.
 */
export enum ELinkDimension {
	large = 'large',
	medium = 'medium',
	small = 'small',
}

/**
 * Enumeration of possible Link positions.
 */
export enum ELinkAlign {
	left = 'left',
	center = 'center',
	right = 'right',
}

/**
 * Link component interface.
 */
export interface ILink extends AnchorHTMLAttributes<HTMLAnchorElement> {
	dimension?: `${ELinkDimension}`
	align?: `${ELinkAlign}`
}

/**
 * The Link component is a classic HTML "a" tag with some styles added. Below you can see an example of its use.
 * @example
 * <Link href="#" dimension="small">Link</Link>
 */
export const Link: FC<ILink> = ({
	children,
	dimension = ELinkDimension.small,
	align,
	...props
}) => {
	// Put all used style classes into the "styles" variable.
	const styles = clsx([
		classes.link,
		classes[dimension],
		align && classes[align],
	])

	return (
		<a className={styles} {...props}>
			{children}
		</a>
	)
}
