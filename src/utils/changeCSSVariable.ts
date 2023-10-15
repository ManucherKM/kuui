/**
 * With this function you can change the value of an existing CSS variable.
 *
 * @param name The name of the CSS variable that needs to be changed.
 * @param value The value with which to replace the CSS variable.
 */
export function changeCSSVariable(name: string, value: string) {
	document.documentElement.style.setProperty(name, value)
}
