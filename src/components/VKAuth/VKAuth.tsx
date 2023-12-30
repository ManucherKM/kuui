// Types
import type { FC, HTMLAttributes } from 'react'

// Styles
import classes from './VKAuth.module.scss'

// Utils
import clsx from 'clsx'

// Icons
import { Vk } from '@/assets/icons'
import { useTabIndex } from '@/hooks'

/** Allowable VKAuth types. */
export type TVKAuth = HTMLAttributes<HTMLDivElement>

/** Enumeration of possible VKAuth variants. */
export enum EVKAuthVariant {
	/** Small button. */
	small = 'small',

	/** Large button. */
	large = 'large',
}

/** Enumeration of possible VKAuth fill variants. */
export enum EVkAuthFill {
	/** Fills all available space. */
	all = 'all',

	/** Fills a fixed space from the available space. */
	fixed = 'fixed',
}

/** VKAuth component interface. */
export interface IVKAuth extends TVKAuth {
	/** Button variants. */
	variant?: `${EVKAuthVariant}`

	/** Options for filling available space. */
	fill?: `${EVkAuthFill}`
}

/**
 * The VKAuth component is the appearance of a button for authorization through
 * VKAuth.
 *
 * @example
 * 	;<VKAuth onClick={() => console.log("Click"))} />
 */
export const VKAuth: FC<IVKAuth> = ({
	variant = EVKAuthVariant.small,
	fill = EVkAuthFill.fixed,
	className,
	tabIndex = useTabIndex(),
	...props
}) => {
	// Put all used style classes into the "styles" variable.
	const styles = clsx([
		classes.root,
		classes[variant],
		classes[fill],
		className,
	])

	return (
		<div className={styles} tabIndex={tabIndex} {...props}>
			<Vk width="20px" height="20px" />

			{variant === EVKAuthVariant.large && (
				<span className={classes.title}>Continue with VK</span>
			)}
		</div>
	)
}
