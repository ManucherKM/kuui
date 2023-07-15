import { FC, HTMLAttributes } from 'react'
import classes from './Title.module.scss'
import clsx from 'clsx'

export enum ETitleDimension {
	large = 'large',
	medium = 'medium',
	small = 'small',
}

export enum ETitleAlign {
	left = 'left',
	center = 'center',
	right = 'right',
}

export interface ITitle extends HTMLAttributes<HTMLHeadingElement> {
	dimension?: `${ETitleDimension}`
	align?: `${ETitleAlign}`
}

const Title: FC<ITitle> = ({
	children,
	dimension = ETitleDimension.medium,
	align,
	...props
}) => {
	const styles = clsx([
		classes.title,
		classes[dimension],
		align && classes[align],
	])

	return (
		<h1 className={styles} {...props}>
			{children}
		</h1>
	)
}

export default Title
