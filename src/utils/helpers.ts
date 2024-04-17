type DebouncedFunction<T extends any[]> = (...args: T) => void

function debounce<T extends any[]>(
	func: (...args: T) => void,
	delay: number = 1000,
): DebouncedFunction<T> {
	let timeoutId: NodeJS.Timeout

	return function debouncedFunction(...args: T) {
		clearTimeout(timeoutId)

		timeoutId = setTimeout(() => {
			func(...args)
		}, delay)
	}
}

export { debounce }
