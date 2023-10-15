// Types
import type { ITheme } from '@/core/themes/types'

// Utils
import { changeCSSVariable } from './changeCSSVariable'

/**
 * With this function you can change the value of CSS variables responsible for
 * the color theme.
 *
 * @param theme An object with values ​​that will be set as the values ​​of CSS
 *   variables responsible for the color theme.
 */
export function changeTheme(theme: ITheme) {
	changeCSSVariable('--kuui-black-1000', theme.black1000)
	changeCSSVariable('--kuui-black-500', theme.black500)
	changeCSSVariable('--kuui-black-250', theme.black250)
	changeCSSVariable('--kuui-dominant-1', theme.dominant1)
	changeCSSVariable('--kuui-dominant-2', theme.dominant2)
	changeCSSVariable('--kuui-warning', theme.warning)
}
