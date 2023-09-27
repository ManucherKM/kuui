import clsx from 'clsx'
import { FC, HTMLAttributes, ReactElement, ReactNode, SVGProps } from 'react'
import classes from './Option.module.scss'

export enum EOptionAlign {
	left = 'left',
	center = 'center',
	right = 'right',
}

export interface IOption extends HTMLAttributes<HTMLDivElement> {
	/** SVG icon */
	icon: ReactNode
	text: string
	align?: `${EOptionAlign}`
}

export const Option: FC<IOption> = ({
	className,
	icon,
	text,
	align = EOptionAlign.center,
	...props
}) => {
	const styles = clsx([classes.wrapper, classes[align], className])
	return (
		<div className={styles} {...props}>
			{icon}
			<span className={classes.text}>{text}</span>
		</div>
	)
}
