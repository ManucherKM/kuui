import { ITheme } from '@/core/themes/types'
import { changeCSSVariable } from './changeCSSVariable'

export function changeTheme(theme: ITheme) {
	changeCSSVariable('--kuui-black-1000', theme.black1000)
	changeCSSVariable('--kuui-black-500', theme.black500)
	changeCSSVariable('--kuui-black-250', theme.black250)
	changeCSSVariable('--kuui-dominant-1', theme.dominant1)
	changeCSSVariable('--kuui-dominant-2', theme.dominant2)
	changeCSSVariable('--kuui-warning', theme.warning)
}
