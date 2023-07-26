// Types
import type { ChangeEvent, FC } from 'react'

// Components
import { CheckBox } from '@/ui/CheckBox/CheckBox'

// Styles
import classes from './SettingsPanel.module.scss'

/**
 * Сheckbox options interface
 */
export interface IToggle {
	checked?: boolean
	callback: (e: ChangeEvent<HTMLInputElement>) => void
}

/**
 * SettingsPanel component interface.
 */
export interface ISettingsPanel {
	name: string
	toggles: IToggle[]
}

/**
 * The SettingsPanel component is a panel for settings.  Below you can see an example of its use.
 * @example
 * <SettingsPanel
 * 	name="Name 1"
 * 	toggles={[
 * 		{
 * 			checked: true,
 * 			callback: () => console.log('Click 1')
 * 		}
 * 	]}
 * />
 */
export const SettingsPanel: FC<ISettingsPanel> = ({ name, toggles }) => {
	return (
		<div className={classes.wrapper}>
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
