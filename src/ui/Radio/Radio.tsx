import clsx from 'clsx'
import { FC, InputHTMLAttributes } from 'react'
import classes from './Radio.module.scss'

enum ERadioDimension {
	large = 'large',
	medium = 'medium',
	small = 'small',
}

interface IRadio extends InputHTMLAttributes<HTMLInputElement> {
	dimension?: `${ERadioDimension}`
}

const Radio: FC<IRadio> = ({ dimension = ERadioDimension.small, ...props }) => {
	const styles = clsx([classes.radio, classes[dimension]])

	return <input type="radio" className={styles} {...props} />
}

export default Radio
