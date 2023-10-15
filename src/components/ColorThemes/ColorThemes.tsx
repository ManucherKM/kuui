// Types
import type { ITheme } from '@/core/themes/types'
import type { FC, HTMLAttributes } from 'react'

// Components
import { AddTheme } from './AddTheme/AddTheme'
import { ListThemes } from './ListThemes/ListThemes'

// Utils
import * as themes from '@/core/themes'
import { changeTheme } from '@/utils'
import clsx from 'clsx'
import { useRef } from 'react'

// Styles
import classes from './ColorThemes.module.scss'

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
	customThemes?: ITheme[]
	addTheme?: boolean
	onAddTheme?: () => void
}

/**
 * Default themes
 */
const defaultThemes: ITheme[] = [
	themes.native,
	themes.redux,
	themes.cornhub,
	themes.vscode,
	themes.blackAndWhite,
]

export const ColorThemes: FC<IColorThemes> = ({
	addTheme,
	onAddTheme,
	className,
	customThemes = [],
	fill = EColorThemesFill.fixed,
	...props
}) => {
	/**
	 * Array of Themes.
	 */
	const themes = useRef<ITheme[]>([...defaultThemes, ...customThemes])

	function onThemeChangeHandler(theme: ITheme) {
		changeTheme(theme)
	}

	const styles = clsx([classes.root, classes[fill], className])
	return (
		<div className={styles} {...props}>
			<ListThemes
				onThemeChange={onThemeChangeHandler}
				themes={themes.current}
			/>
			{addTheme && <AddTheme onClick={onAddTheme} />}
		</div>
	)
}
