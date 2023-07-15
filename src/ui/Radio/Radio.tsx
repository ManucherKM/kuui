import clsx from 'clsx'
import { FC, InputHTMLAttributes } from 'react'
import classes from './Radio.module.scss'

export enum ERadioDimension {
	large = 'large',
	medium = 'medium',
	small = 'small',
}

export interface IRadio extends InputHTMLAttributes<HTMLInputElement> {
	dimension?: `${ERadioDimension}`
}

const Radio: FC<IRadio> = ({ dimension = ERadioDimension.small, ...props }) => {
	const styles = clsx([classes.label, classes[dimension]])

	return (
		<label className={styles}>
			<input type="radio" {...props} />
			<span />
		</label>
	)
}

export default Radio
