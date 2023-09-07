import type { FC } from 'react'
import classes from './NotFound.module.scss'

export const NotFound: FC = () => {
	return (
		<div className={classes.wrapper}>
			<span className={classes.title}>Error 404</span>
			<span className={classes.subtitle}>Page not found</span>
		</div>
	)
}
