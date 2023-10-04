// Types
import type { FC } from 'react'
import type { IPopup } from '../Popup/Popup'
import type { ESpinnerDimension } from '../Spinner/Spinner'

// Components
import { Popup } from '../Popup/Popup'
import { Spinner } from '../Spinner/Spinner'

/** Loader component interface. */
export interface ILoader extends IPopup {
	dimension?: `${ESpinnerDimension}`
}

/**
 * The Loader component is a combination of the Popup and Spinner components,
 * designed to handle cases of waiting for data retrieval. Below you can see an
 * example of its use.
 *
 * @example
 * 	;<Loader dimension="small" />
 */
export const Loader: FC<ILoader> = ({ dimension, ...props }) => {
	return (
		<Popup {...props}>
			<Spinner dimension={dimension} />
		</Popup>
	)
}
