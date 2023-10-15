// Utils
import { changeCSSVariable } from './changeCSSVariable'

/**
 * With this function you can change the value of the CSS fillet variable.
 *
 * @param value The value with which to replace the CSS variable.
 */
export function changeRound(value: string) {
	changeCSSVariable('--kuui-radius', value)
}
