// Types
import type { ChangeEvent, FC, HTMLAttributes } from 'react'

// Components
import { CheckBox } from '@/ui/CheckBox/CheckBox'

// Styles
import classes from './SettingsPanel.module.scss'

/** Сheckbox options interface */
export interface IToggle {
	checked?: boolean
	callback: (e: ChangeEvent<HTMLInputElement>) => void
}

/** Allowable SettingsPanel types. */

export type TSettingsPanel = Omit<HTMLAttributes<HTMLDivElement>, 'className'>

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
	...props
}) => {
	return (
		<div className={classes.wrapper} {...props}>
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
