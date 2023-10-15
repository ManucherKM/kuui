import { ITheme as IColorTheme } from '@/core/themes/types'
import clsx from 'clsx'
import { CSSProperties, FC, HTMLAttributes } from 'react'
import classes from './Theme.module.scss'

export type TTheme = HTMLAttributes<HTMLDivElement>

export interface ITheme extends TTheme {
	theme?: IColorTheme
}

export const Theme: FC<ITheme> = ({ className, theme, ...props }) => {
	const styles = clsx([classes.root, className])
	const inlineStyles: CSSProperties = {
		...props.style,
		background: theme?.dominant1,
	}
	return <div className={styles} style={inlineStyles} {...props} />
}
