import classes from './NotFound.module.scss'

export const NotFound = () => {
	return (
		<div className={classes.wrapper}>
			<span className={classes.title}>Error 404</span>
			<span className={classes.subtitle}>Page not found</span>
		</div>
	)
}
