// Types
import type { ChangeEvent, FC, HTMLAttributes } from 'react'

// Components
import { CheckBox } from '@/ui/CheckBox/CheckBox'

// Styles
import classes from './SettingsPanel.module.scss'
import clsx from 'clsx'

/** Сheckbox options interface */
export interface IToggle {
	checked?: boolean
	callback: (e: ChangeEvent<HTMLInputElement>) => void
}

/** Allowable SettingsPanel types. */

export type TSettingsPanel = HTMLAttributes<HTMLDivElement>

/** SettingsPanel component interface. */
export interface ISettingsPanel extends TSettingsPanel {
	name: string
	toggles: IToggle[]
}

/**
 * The SettingsPanel component is a panel for settings. Below you can see an
 * example of its use.
 *
 * @example
 * 	;<SettingsPanel
 * 		name="Name 1"
 * 		toggles={[
 * 			{
 * 				checked: true,
 * 				callback: () => console.log('Click 1'),
 * 			},
 * 		]}
 * 	/>
 */
export const SettingsPanel: FC<ISettingsPanel> = ({
	name,
	toggles,
	className,
	...props
}) => {
	const wrapperStyles = clsx([classes.wrapper, className])

	return (
		<div className={wrapperStyles} {...props}>
			<span className={classes.name}>{name}</span>
			<div className={classes.toggles}>
				{toggles.map((toggle, idx) => (
					<CheckBox
						key={idx}
						variant="text"
						checked={toggle.checked}
						onChange={toggle.callback}
					/>
				))}
			</div>
		</div>
	)
}
