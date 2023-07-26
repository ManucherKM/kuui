// Types
import { FC, HTMLAttributes } from 'react'
import type { ESpinnerDimension } from '../Spinner/Spinner'

// Components
import { Spinner } from '../Spinner/Spinner'
import { Popup } from '../Popup/Popup'

/**
 * Allowable Loader types.
 */
export type TLoader = Omit<HTMLAttributes<HTMLDivElement>, 'className'>

/**
 * Loader component interface.
 */
export interface ILoader extends TLoader {
	dimension?: `${ESpinnerDimension}`
}

/**
 * The Loader component is a combination of the Popup and Spinner components, designed to handle cases of waiting for data retrieval. Below you can see an example of its use.
 * @example
 * <Loader dimension="small"/>
 */
export const Loader: FC<ILoader> = ({ dimension, ...props }) => {
	return (
		<Popup {...props}>
			<Spinner dimension={dimension} />
		</Popup>
	)
}
