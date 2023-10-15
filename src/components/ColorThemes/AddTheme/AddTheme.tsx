import { Plus } from '@/assets/icons'
import clsx from 'clsx'
import { FC, HTMLAttributes } from 'react'
import classes from './AddTheme.module.scss'

export type TAddTheme = HTMLAttributes<HTMLDivElement>

export interface IAddTheme extends TAddTheme {}

export const AddTheme: FC<IAddTheme> = ({ className, ...props }) => {
	const styles = clsx([classes.root, className])
	return (
		<div className={styles} {...props}>
			<Plus width="24px" height="24px" />
		</div>
	)
}
