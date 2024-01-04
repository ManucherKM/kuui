import { List } from '@/components'
import { FC, HTMLAttributes } from 'react'
import classes from './Ul.module.scss'

export interface IUl extends HTMLAttributes<HTMLUListElement> {
	items: HTMLAttributes<HTMLLIElement>[]
}

export const Ul: FC<IUl> = ({ items }) => {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
			}}
		>
			<ul className={classes.root}>
				<List
					arr={items}
					callback={(props, idx) => <li key={idx} {...props} />}
				/>
			</ul>
		</div>
	)
}
