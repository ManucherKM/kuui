// Types
import type { FC, HTMLAttributes } from 'react'

// Components
import { AddTheme } from './AddTheme/AddTheme'
import { ListThemes } from './ListThemes/ListThemes'

// Utils
import { changeTheme } from '@/utils'
import clsx from 'clsx'
import { useRef } from 'react'

// Styles
import classes from './ColorThemes.module.scss'

export interface ITheme {
	id: string
	black1000: string
	black500: string
	black250: string
	dominant1: string
	dominant2: string
	warning: string
}

/** Enumeration of possible ColorThemes fill variants. */
export enum EColorThemesFill {
	fixed = 'fixed',
	all = 'all',
}

/** Allowable ColorThemes types. */
export type TColorThemes = HTMLAttributes<HTMLDivElement>

/** ColorThemes component interface. */
export interface IColorThemes extends TColorThemes {
	fill?: `${EColorThemesFill}`
	themes?: ITheme[]
	addTheme?: boolean
	onAddTheme?: () => void
	onChangeTheme?: (theme: ITheme) => void
}

/**
 * With this component you can change the user's color theme. Below you can see
 * an example of its use.
 *
 * @example
 * 	;<ColorThemes onChangeTheme={console.log} />
 */
export const ColorThemes: FC<IColorThemes> = ({
	addTheme,
	onAddTheme,
	onChangeTheme,
	className,
	themes = [],
	fill = EColorThemesFill.fixed,
	...props
}) => {
	/**
	 * Function handler for changing the theme.
	 *
	 * @param theme An object with values ​​that will be set as the values ​​of
	 *   CSS variables responsible for the color theme.
	 */
	function onThemeChangeHandler(theme: ITheme) {
		// Change the values ​​of CSS variables to change the color theme.
		changeTheme(theme)

		// If the developer has installed a handler to track changes.
		if (onChangeTheme) {
			// We call this handler, passing it the current theme value.
			onChangeTheme(theme)
		}
	}

	// Put all used style classes into the "styles" variable.
	const styles = clsx([classes.root, classes[fill], className])
	return (
		<div className={styles} {...props}>
			<ListThemes onThemeChange={onThemeChangeHandler} themes={themes} />
			{addTheme && <AddTheme onClick={onAddTheme} />}
		</div>
	)
}
