import { ChangeEvent, FC, InputHTMLAttributes, useState } from 'react'
import classes from './Text.module.scss'
import clsx from 'clsx'

export enum ETextDimension {
	large = 'large',
	medium = 'medium',
	small = 'small',
}

export interface IText extends InputHTMLAttributes<HTMLInputElement> {
	dimension?: `${ETextDimension}`
}

const Text: FC<IText> = ({ dimension = ETextDimension.small, onChange, ...props }) => {
	const [isChecked, setIsChecked] = useState<boolean | undefined>(props.checked)

	function changeHandler(e: ChangeEvent<HTMLInputElement> | undefined) {
		if (onChange && e) {
			onChange(e)
		}

		setIsChecked(p => !p)
	}

	const styles = clsx([classes.text, classes[dimension], isChecked && classes.active])

	return (
		<label className={styles}>
			<input type="checkbox" onChange={changeHandler} {...props} />
			<span>{isChecked ? 'On' : 'Off'}</span>
		</label>
	)
}

export default Text
