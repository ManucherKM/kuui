// Types
import type { FC, HTMLAttributes } from 'react'

// Styles
import classes from './ConfirmEmail.module.scss'

// Components
import { Title } from '@/ui/Title/Title'
import { Subtitle } from '@/ui/Subtitle/Subtitle'

// Utils
import clsx from 'clsx'

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
 * for the user to go to their email and activate their account.
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
	const styles = clsx([classes.confirmEmail, classes[fill], className])

	return (
		<div className={styles} {...props}>
			<div className={classes.container}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="60"
					height="48"
					viewBox="0 0 60 48"
					fill="none"
				>
					<path
						d="M54 0H6C2.7 0 0.03 2.7 0.03 6L0 42C0 45.3 2.7 48 6 48H54C57.3 48 60 45.3 60 42V6C60 2.7 57.3 0 54 0ZM54 12L30 27L6 12V6L30 21L54 6V12Z"
						fill="#BC98EA"
					/>
				</svg>

				<Title dimension="large">Activate the account.</Title>

				<Subtitle dimension="small" align="center">
					An email was sent to {email} to activate the account. Please follow
					the link provided in the e-mail.
				</Subtitle>
			</div>
		</div>
	)
}
