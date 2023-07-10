import { FC } from 'react'
import { InputHTMLAttributes } from 'react'
import classes from './CheckBox.module.scss'

interface ICheckBox extends InputHTMLAttributes<HTMLInputElement> {}

const CheckBox: FC<ICheckBox> = ({ ...props }) => {
	return (
		<label className={classes.label}>
			<input type="checkbox" {...props} />
			<span />
		</label>
	)
}

export default CheckBox
