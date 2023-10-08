// Types
import type { FC, HTMLAttributes } from 'react'

// Styles
import classes from './ConfirmEmail.module.scss'

// Components
import { Subtitle } from '@/ui/Subtitle/Subtitle'
import { Title } from '@/ui/Title/Title'

// Utils
import clsx from 'clsx'

// Icons
import * as icons from '@/assets/icons'

/** Allowable ConfirmEmail types. */
export type TConfirmEmail = HTMLAttributes<HTMLDivElement>

/** Enumeration of possible ConfirmEmail fill. */
export enum EFillConfirmEmail {
	screen = 'screen',
	availableSpace = 'availableSpace',
}

/** ConfirmEmail component interface. */
export interface IConfirmEmail extends TConfirmEmail {
	email: string
	fill?: `${EFillConfirmEmail}`
}

/**
 * The ConfirmEmail component is a page/component that will be shown to the user
 * for the user to go to their email and activate their account. Below is an example of its use.
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
	const styles = clsx([classes.root, classes[fill], className])

	return (
		<div className={styles} {...props}>
			<div className={classes.container}>
				<icons.Mail width="60" height="48" className={classes.mail} />
				<Title dimension="large" align="center">
					Activate the account.
				</Title>
				<Subtitle dimension="small" align="center">
					An email was sent to {email} to activate the account. Please follow
					the link provided in the e-mail.
				</Subtitle>
			</div>
		</div>
	)
}
