declare interface String {
	replaceAt(idx: number, char: string): string
}

String.prototype.replaceAt = function (idx: number, char: string) {
	const arr = [...this]
	arr[idx] = char
	return arr.join('')
}
