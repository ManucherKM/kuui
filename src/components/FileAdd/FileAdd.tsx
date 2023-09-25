import { FC, HTMLAttributes } from 'react'
import classes from './FileAdd.module.scss'
import clsx from 'clsx'

export enum EFileAddFill {
	all = 'all',
	fixed = 'fixed',
}

export interface IFileAdd extends HTMLAttributes<HTMLDivElement> {
	fill?: `${EFileAddFill}`
}

export const FileAdd: FC<IFileAdd> = ({
	className,
	fill = EFileAddFill.all,
	...props
}) => {
	const styles = clsx([classes.wrapper, classes[fill], className])
	return (
		<div className={styles} {...props}>
			<svg className={classes.plus} viewBox="0 0 24 24">
				<path
					d="M4 12H20M12 4V20"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		</div>
	)
}
