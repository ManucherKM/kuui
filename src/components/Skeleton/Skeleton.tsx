import clsx from 'clsx'
import type { FC, HTMLAttributes } from 'react'
import classes from './Skeleton.module.scss'

export interface ISkeleton
	extends Omit<HTMLAttributes<HTMLDivElement>, 'style'> {
	width: string
	height: string
}

export const Skeleton: FC<ISkeleton> = ({
	className,
	width,
	height,
	...props
}) => {
	const styles = clsx([classes.root, className])
	return (
		<div
			className={styles}
			style={{
				width,
				height,
			}}
			{...props}
		/>
	)
}
