import * as themes from '@/core/themes'
import { ITheme } from '@/core/themes/types'
import clsx from 'clsx'
import { FC, HTMLAttributes, useState } from 'react'
import { AddTheme } from './AddTheme/AddTheme'
import classes from './ColorThemes.module.scss'
import { ListThemes } from './ListThemes/ListThemes'

export type TColorThemes = HTMLAttributes<HTMLDivElement>

export enum IColorThemesFill {
	fixed = 'fixed',
	all = 'all',
}

export interface IColorThemes extends TColorThemes {
	fill?: `${IColorThemesFill}`
	themes?: ITheme[]
	addTheme?: boolean
	onAddTheme?: () => void
	onThemeChange?: (theme: ITheme) => void
}

export const defaultThemes: ITheme[] = [
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
	onThemeChange,
	themes,
	fill,
	...props
}) => {
	const [allThemes, setAllThemes] = useState<ITheme[]>(
		themes?.length ? [...defaultThemes, ...themes] : defaultThemes,
	)

	function onThemeChangeHandler(theme: ITheme) {
		if (onThemeChange) {
			onThemeChange(theme)
		}
	}

	const styles = clsx([classes.root, fill && classes[fill], className])
	return (
		<div className={styles} {...props}>
			<ListThemes onThemeChange={} themes={allThemes} />
			{addTheme && <AddTheme onClick={onAddTheme} />}
		</div>
	)
}
