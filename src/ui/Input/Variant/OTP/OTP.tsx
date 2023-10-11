import clsx from 'clsx'
import { KeyboardEvent, useEffect, useRef, useState, type FC } from 'react'
import { Input } from './Input/Input'
import classes from './OTP.module.scss'

export interface IOTP {
	value: string
	length: number
	onChange: (value: string) => void
	onComplete: () => void
}

export const OTP: FC<IOTP> = ({ value, length, onChange, onComplete }) => {
	const [focusIdx, setFocusIdx] = useState<number>(0)
	const [prevValue, setPrevValue] = useState<string>('')

	const arr = new Array(length).fill(null)

	const inputRefs = useRef<(HTMLInputElement | null)[]>([])

	function keyDownHandler(e: KeyboardEvent<HTMLInputElement>) {
		if (e.code === 'Backspace') {
			setFocusIdx(prev => prev - 1)
		}
	}

	useEffect(() => {
		if (value.length > prevValue.length) {
			setFocusIdx(prev => prev + 1)
		}

		setPrevValue(value)

		if (value.length === length) {
			onComplete()
		}
	}, [value])

	useEffect(() => {
		inputRefs.current[focusIdx]?.focus()
	}, [focusIdx])

	return (
		<div className={classes.root}>
			{arr.map((_, idx) => (
				<Input
					onKeyDown={keyDownHandler}
					ref={el => (inputRefs.current[idx] = el)}
					key={idx}
					onChange={e => onChange(value.replaceAt(idx, e.target.value))}
					value={value[idx] || ''}
				/>
			))}
		</div>
	)
}
