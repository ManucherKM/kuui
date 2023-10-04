// Types
import type { FC, HTMLAttributes } from 'react'

// Styles
import classes from './VKAuth.module.scss'

// Utils
import { getTabIndex } from '@/utils'
import clsx from 'clsx'

// Icons
import * as icons from '@/assets/icons'

/** Allowable VKAuth types. */
export type TVKAuth = HTMLAttributes<HTMLDivElement>

/** Enumeration of possible VKAuth variants. */
export enum EVKAuthVariant {
	small = 'small',
	large = 'large',
}

/** VKAuth component interface. */
export interface IVKAuth extends TVKAuth {
	variant?: `${EVKAuthVariant}`
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
	className,
	tabIndex = getTabIndex(),
	...props
}) => {
	// Put all used style classes into the "styles" variable.
	const styles = clsx([classes.root, classes[variant], className])

	return (
		<div className={styles} tabIndex={tabIndex} {...props}>
			<icons.Vk width="20px" height="20px" />

			{variant === EVKAuthVariant.large && (
				<span className={classes.title}>Continue with VK</span>
			)}
		</div>
	)
}
