// Types
import type { ReactNode } from 'react'

/**
 * List component interface.
 */
export interface IList<T> {
	arr: T[]
	callback: (item: T) => ReactNode
}

/**
 * You can render a list of components using the List component.
 * @example
 * <List arr={users} callback={(user) => <UserInfo info={user} />} />
 */
export function List<T>({ arr, callback }: IList<T>) {
	return <>{arr.map(callback)}</>
}
