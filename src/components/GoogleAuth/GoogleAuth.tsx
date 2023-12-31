// Types
import type { FC, HTMLAttributes } from 'react'

// Utils
import clsx from 'clsx'

// Styles
import classes from './GoogleAuth.module.scss'

// Icons
import * as icons from '@/assets/icons'

/** Allowable GoogleAuth types. */
export type TGoogleAuth = Omit<HTMLAttributes<HTMLDivElement>, 'tabIndex'>

/** Enumeration of possible GoogleAuth variants. */
export enum EGoogleAuthVariant {
	/** Small button. */
	small = 'small',

	/** Large button. */
	large = 'large',
}

/** Enumeration of possible GoogleAuth fill variants. */
export enum EGoogleAuthFill {
	/** Fills all available space. */
	all = 'all',

	/** Fills a fixed space from the available space. */
	fixed = 'fixed',
}

/** GoogleAuth component interface. */
export interface IGoogleAuth extends TGoogleAuth {
	/** Button variants. */
	variant?: `${EGoogleAuthVariant}`

	/** Options for filling available space. */
	fill?: `${EGoogleAuthFill}`
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
	fill = EGoogleAuthFill.fixed,
	className,
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
		<div className={styles} tabIndex={0} {...props}>
			<icons.Google width="20px" height="20px" />
			{variant === EGoogleAuthVariant.large && (
				<span className={classes.title}>Continue with Google</span>
			)}
		</div>
	)
}
