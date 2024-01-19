// Types
import type { FC, HTMLAttributes } from 'react'

// Styles
import classes from './ConfirmEmail.module.scss'

// Components
import { Subtitle, Title } from '@/ui'

// Utils
import clsx from 'clsx'

// Icons
import { Mail } from '@/assets/icons'

/** Allowable ConfirmEmail types. */
export type TConfirmEmail = HTMLAttributes<HTMLDivElement>

/** Enumeration of possible ConfirmEmail fill. */
export enum EFillConfirmEmail {
	/** Fills a space equal to the size of the screen. */
	screen = 'screen',

	/** Fills all available space. */
	all = 'all',

	fixed = 'fixed',
}

/** ConfirmEmail component interface. */
export interface IConfirmEmail extends TConfirmEmail {
	email: string

	/** The parameter is responsible for how the available space should be filled. */
	fill?: `${EFillConfirmEmail}`
}

/**
 * The ConfirmEmail component is a page/component that will be shown to the user
 * for the user to go to their email and activate their account. Below is an
 * example of its use.
 *
 * @example
 * 	;<ConfirmEmail email="test@gmail.com" />
 */
export const ConfirmEmail: FC<IConfirmEmail> = ({
	email,
	fill = EFillConfirmEmail.screen,
	className,
	...props
}) => {
	// Put all used style classes into the "styles" variable.
	const styles = clsx([classes.root, fill && classes[fill], className])

	return (
		<div className={styles} {...props}>
			<div className={classes.container}>
				<Mail width="60" height="48" className={classes.mail} />
				<Title dimension="large" align="center">
					Activate the account
				</Title>
				<Subtitle dimension="small" align="center">
					An email was sent to {email} to activate the account. Please follow
					the link provided in the e-mail.
				</Subtitle>
			</div>
		</div>
	)
}
