import { FC } from 'react'
import { InputHTMLAttributes } from 'react'
import classes from './CheckBox.module.scss'
import clsx from 'clsx'

enum ECheckBoxDimension {
	large = 'large',
	medium = 'medium',
	small = 'small',
}

interface ICheckBox extends InputHTMLAttributes<HTMLInputElement> {
	dimension?: `${ECheckBoxDimension}`
}

const CheckBox: FC<ICheckBox> = ({ dimension = ECheckBoxDimension.small, ...props }) => {
	const styles = clsx([classes.label, classes[dimension]])

	return (
		<label className={styles}>
			<input type="checkbox" {...props} />
			<span />
		</label>
	)
}

export default CheckBox
