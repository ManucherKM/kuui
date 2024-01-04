import { List } from '@/components'
import clsx from 'clsx'
import { FC, HTMLAttributes } from 'react'
import classes from './Ul.module.scss'

export interface IUl extends HTMLAttributes<HTMLUListElement> {
	items: HTMLAttributes<HTMLLIElement>[]
}

export const Ul: FC<IUl> = ({ items, className, ...props }) => {
	const styles = clsx([classes.root, className])
	return (
		<ul className={styles} {...props}>
			<List
				arr={items}
				callback={(props, idx) => <li key={idx} {...props} />}
			/>
		</ul>
	)
}
