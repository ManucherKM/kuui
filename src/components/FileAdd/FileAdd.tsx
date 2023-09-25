import { FC, HTMLAttributes, InputHTMLAttributes } from 'react'
import classes from './FileAdd.module.scss'
import clsx from 'clsx'

export enum EFileAddFill {
	all = 'all',
	fixed = 'fixed',
}

export interface IFileAdd
	extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
	fill?: `${EFileAddFill}`
}

export const FileAdd: FC<IFileAdd> = ({
	className,
	fill = EFileAddFill.all,
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
