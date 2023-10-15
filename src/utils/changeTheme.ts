import { ITheme } from '@/core/themes/types'

export function changeTheme(theme: ITheme) {
	document.documentElement.style.setProperty(
		'--kuui-black-1000',
		theme.black1000,
	)
	document.documentElement.style.setProperty('--kuui-black-500', theme.black500)
	document.documentElement.style.setProperty('--kuui-black-250', theme.black250)
	document.documentElement.style.setProperty(
		'--kuui-dominant-1',
		theme.dominant1,
	)
	document.documentElement.style.setProperty(
		'--kuui-dominant-2',
		theme.dominant2,
	)
	document.documentElement.style.setProperty('--kuui-warning', theme.warning)
}
