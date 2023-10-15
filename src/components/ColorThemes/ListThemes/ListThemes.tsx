// Types
import type { ITheme } from '@/core/themes/types'
import type { FC } from 'react'

// Components
import { List } from '@/components/List/List'
import { Theme } from '../Theme/Theme'

/** ListThemes component interface. */
export interface IListThemes {
	onThemeChange: (theme: ITheme) => void
	themes: ITheme[]
}

/**
 * With this component you can render a list of topics that the end user can
 * select. Below you can see an example of its use.
 *
 * @example
 * 	;<ListThemes
 * 		onThemeChange={console.log}
 * 		themes={[
 * 			{
 * 				black1000: '#22272e',
 * 				black500: '#272e35',
 * 				black250: '#6d7887',
 * 				dominant1: 'red',
 * 				dominant2: '#cbd0df',
 * 				warning: '#ef6c75',
 * 			},
 * 			{
 * 				black1000: '#1b1b1b',
 * 				black500: '#292929',
 * 				black250: '#808080',
 * 				dominant1: '#ffa31a',
 * 				dominant2: '#ffffff',
 * 				warning: '#c71700',
 * 			},
 * 		]}
 * 	/>
 */
export const ListThemes: FC<IListThemes> = ({ themes, onThemeChange }) => {
	return (
		<List
			arr={themes}
			callback={(theme, idx) => (
				<Theme key={idx} theme={theme} onClick={() => onThemeChange(theme)} />
			)}
		/>
	)
}
