// Types
import type { FC } from 'react'
import type { ESpinnerDimension } from '../Spinner/Spinner'
import type { IPopup } from '../Popup/Popup'

// Components
import { Spinner } from '../Spinner/Spinner'
import { Popup } from '../Popup/Popup'

/**
 * Loader component interface.
 */
export interface ILoader extends IPopup {
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
