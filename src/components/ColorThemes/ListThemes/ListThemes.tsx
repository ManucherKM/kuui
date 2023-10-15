import { List } from '@/components/List/List'
import { ITheme } from '@/core/themes/types'
import { FC } from 'react'
import { Theme } from '../Theme/Theme'

export interface IListThemes {
	onThemeChange: (theme: ITheme) => void
	themes: ITheme[]
}

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
