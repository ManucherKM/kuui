import { ChangeEvent, FC } from 'react'
import classes from './SettingsPanel.module.scss'
import CheckBox from '../../ui/CheckBox/CheckBox'

export interface IToggle {
	checked?: boolean
	callback: (e: ChangeEvent<HTMLInputElement>) => void
}

export interface ISettingsPanel {
	name: string
	toggles: IToggle[]
}

const SettingsPanel: FC<ISettingsPanel> = ({ name, toggles }) => {
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

export default SettingsPanel
