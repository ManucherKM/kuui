import { Input } from '@/ui/Input/Input'
import { changeRound } from '@/utils/changeRound'
import { ChangeEvent, FC, useEffect, useState } from 'react'
import classes from './ChangeRound.module.scss'

export interface IChangeRound {}

export const ChangeRound: FC<IChangeRound> = () => {
	const [round, setRound] = useState<string>('')

	function changeHandler(e: ChangeEvent<HTMLInputElement>) {
		const digits = e.target.value.replace(/\D/g, '')
		setRound(digits)
	}

	useEffect(() => {
		if (round.length !== 0) {
			changeRound(round + 'px')
		}
	}, [round])

	return (
		<Input
			variant="text"
			className={classes.root}
			value={round}
			onChange={changeHandler}
		/>
	)
}
