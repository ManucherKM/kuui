// Types
import type { ReactNode } from 'react'

/** List component interface. */
export interface IList<T> {
	/** An array based on which the list should be rendered. */
	arr: T[]

	/**
	 * A callback that will be called for each element of the array.
	 *
	 * @param item Array element.
	 * @param idx Array element index.
	 * @param arr Source array.
	 */
	callback: (item: T, idx: number, arr: T[]) => ReactNode
}

/**
 * You can render a list of components using the List component.
 *
 * @example
 * 	;<List arr={users} callback={user => <UserInfo info={user} />} />
 */
export function List<T>({ arr, callback }: IList<T>) {
	return <>{arr.map(callback)}</>
}
