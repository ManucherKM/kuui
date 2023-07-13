import clsx from 'clsx'
import classes from './Box.module.scss'
import { FC, InputHTMLAttributes } from 'react'

export enum EBoxDimension {
	large = 'large',
	medium = 'medium',
	small = 'small',
}

export interface IBox extends InputHTMLAttributes<HTMLInputElement> {
	dimension?: `${EBoxDimension}`
}

const Box: FC<IBox> = ({ dimension = EBoxDimension.small, ...props }) => {
	const styles = clsx([classes.box, classes[dimension]])

	return (
		<label className={styles}>
			<input type="checkbox" {...props} />
			<span />
		</label>
	)
}

export default Box
