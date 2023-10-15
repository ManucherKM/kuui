import { changeCSSVariable } from './changeCSSVariable'

export function changeRound(value: string) {
	changeCSSVariable('--kuui-radius', value)
}
