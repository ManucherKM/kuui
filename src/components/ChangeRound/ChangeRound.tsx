// Types
import type { ChangeEvent, FC } from 'react'

// Utils
import { changeRound } from '@/utils'
import { useEffect, useState } from 'react'

// Styles
import classes from './ChangeRound.module.scss'

// Components
import { IInputText, Input } from '@/ui'

/** Allowable ChangeRound types. */
export type TChangeRound = Omit<
	IInputText,
	'variant' | 'placeholder' | 'className' | 'value' | 'onChange'
>

/** ChangeRound component interface. */
export interface IChangeRound extends TChangeRound {
	onChangeRound?: (round: string) => void
}

/**
 * With this component you can change the value of a CSS variable to the user's
 * value via input. Below you can see an example of its use.
 *
 * @example
 * 	;<ChangeRound onChangeRound={console.log} />
 */
export const ChangeRound: FC<IChangeRound> = ({ onChangeRound, ...props }) => {
	// State for rounding.
	const [round, setRound] = useState<string>('')

	/**
	 * Function handler for input.
	 *
	 * @param e Event when a function is triggered.
	 */
	function changeHandler(e: ChangeEvent<HTMLInputElement>) {
		const digits = e.target.value.replace(/\D/g, '')
		setRound(digits)
	}

	// Each time the round value changes.
	useEffect(() => {
		// If the round is not empty.
		if (round.length !== 0) {
			// Change the value of the CSS variable.
			changeRound(round + 'px')

			// If the developer has installed a handler to track changes.
			if (onChangeRound) {
				// We call this handler by passing the current rounding value to it.
				onChangeRound(round)
			}
		}
	}, [round])

	return (
		<Input
			variant="text"
			placeholder="pixels"
			className={classes.root}
			value={round}
			onChange={changeHandler}
			{...props}
		/>
	)
}
