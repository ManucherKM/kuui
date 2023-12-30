import { getTabIndex } from '@/utils'
import { useCallback } from 'react'

export function useTabIndex() {
	return useCallback(getTabIndex, [])()
}
