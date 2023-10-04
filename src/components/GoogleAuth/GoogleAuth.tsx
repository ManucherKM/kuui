// Types
import type { FC, HTMLAttributes } from 'react'

// Utils
import { getTabIndex } from '@/utils'
import clsx from 'clsx'

// Styles
import classes from './GoogleAuth.module.scss'

// Icons
import * as icons from '@/assets/icons'

/** Allowable GoogleAuth types. */
export type TGoogleAuth = Omit<HTMLAttributes<HTMLDivElement>, 'tabIndex'>

/** Enumeration of possible GoogleAuth variants. */
export enum EGoogleAuthVariant {
	small = 'small',
	large = 'large',
}

/** GoogleAuth component interface. */
export interface IGoogleAuth extends TGoogleAuth {
	variant?: `${EGoogleAuthVariant}`
}

/**
 * The GoogleAuth component is the appearance of a button for authorization
 * through Google.
 *
 * @example
 * 	;<GoogleAuth onClick={() => console.log("Click"))} />
 */
export const GoogleAuth: FC<IGoogleAuth> = ({
	variant = EGoogleAuthVariant.small,
	className,
	...props
}) => {
	// Put all used style classes into the "styles" variable.
	const styles = clsx([classes.root, classes[variant], className])

	return (
		<div className={styles} tabIndex={getTabIndex()} {...props}>
			<icons.Google />
			{variant === EGoogleAuthVariant.large && (
				<span className={classes.title}>Continue with Google</span>
			)}
		</div>
	)
}
