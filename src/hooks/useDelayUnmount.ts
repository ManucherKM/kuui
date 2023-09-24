import { useEffect, useState } from 'react'

export function useDelayUnmount(isMounted: boolean, delayTime: number) {
	const [shouldRender, setShouldRender] = useState<boolean>(false)

	useEffect(() => {
		let timeoutId: number | NodeJS.Timeout
		if (isMounted && !shouldRender) {
			setShouldRender(true)
		} else if (!isMounted && shouldRender) {
			timeoutId = setTimeout(() => setShouldRender(false), delayTime)
		}
		return () => clearTimeout(timeoutId)
	}, [isMounted, delayTime, shouldRender])

	return shouldRender
}
