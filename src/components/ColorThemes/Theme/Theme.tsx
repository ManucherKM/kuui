// Types
import type { ITheme as IColorTheme } from '@/core/themes/types'
import type { CSSProperties, FC, HTMLAttributes } from 'react'

// Utils
import clsx from 'clsx'

// Styles
import classes from './Theme.module.scss'

/** Allowable Theme types. */
export type TTheme = HTMLAttributes<HTMLDivElement>

/** Theme component interface. */
export interface ITheme extends TTheme {
	theme?: IColorTheme
}

/**
 * A component with which you can show the dominant color from a color theme.
 * Below is an example of its use.
 *
 * @example
 * 	;<Theme
 * 		theme={{
 * 			black1000: '#242526',
 * 			black500: '#2f3031',
 * 			black250: '#737373',
 * 			dominant1: '#bc98ea',
 * 			dominant2: '#ebedf0',
 * 			warning: '#bc3174',
 * 		}}
 * 	/>
 */
export const Theme: FC<ITheme> = ({ className, theme, style, ...props }) => {
	// Put all used inline styles into the "inlineStyles" variable.
	const inlineStyles: CSSProperties = {
		...style,
		background: theme?.dominant1,
	}

	// Put all used style classes into the "styles" variable.
	const styles = clsx([classes.root, className])
	return <div className={styles} style={inlineStyles} {...props} />
}
