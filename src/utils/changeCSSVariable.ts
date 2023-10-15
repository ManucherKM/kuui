export function changeCSSVariable(name: string, value: string) {
	document.documentElement.style.setProperty(name, value)
}
