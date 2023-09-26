import { FC, HTMLAttributes, InputHTMLAttributes } from 'react'
import classes from './Area.module.scss'
import clsx from 'clsx'

export enum EAreaFill {
	all = 'all',
	fixed = 'fixed',
}

export interface IArea
	extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
	fill?: `${EAreaFill}`
}

export const Area: FC<IArea> = ({
	className,
	fill = EAreaFill.all,
	...props
}) => {
	const styles = clsx([classes.wrapper, classes[fill], className])
	return (
		<label className={styles}>
			<svg className={classes.plus} viewBox="0 0 24 24">
				<path
					d="M4 12H20M12 4V20"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
			<input className={classes.input} type="file" {...props} />
		</label>
	)
}
