// Types
import type { FC } from 'react'

// Styles
import classes from './NotFound.module.scss'

/**
 * The NotFound component is a page that will appear if the user has taken a
 * non-existent route.
 *
 * @example
 * 	;<NotFound />
 */
export const NotFound: FC = () => {
	return (
		<div className={classes.root}>
			<span className={classes.title}>Error 404</span>
			<span className={classes.subtitle}>Page not found</span>
		</div>
	)
}
