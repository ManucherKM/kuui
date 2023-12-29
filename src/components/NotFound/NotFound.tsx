// Types
import type { FC } from 'react'

// Styles
import clsx from 'clsx'
import classes from './NotFound.module.scss'

export enum ENotFoundFill {
	screen = 'screen',
	all = 'all',
}

export interface INotFound {
	fill?: `${ENotFoundFill}`
}

/**
 * The NotFound component is a page that will appear if the user has taken a
 * non-existent route.
 *
 * @example
 * 	;<NotFound />
 */
export const NotFound: FC<INotFound> = ({ fill = ENotFoundFill.screen }) => {
	const rootStyles = clsx([classes.root, classes[fill]])
	return (
		<div className={rootStyles}>
			<span className={classes.title}>Error 404</span>
			<span className={classes.subtitle}>Page not found</span>
		</div>
	)
}
