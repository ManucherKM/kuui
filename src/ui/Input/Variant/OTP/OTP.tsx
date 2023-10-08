import clsx from 'clsx'
import { useEffect, useRef, type FC } from 'react'
import { Input } from './Input/Input'
import classes from './OTP.module.scss'

export interface IOTP {
	value: string
	length: number
	onChange: (value: string) => void
}

export const OTP: FC<IOTP> = ({ value, length, onChange }) => {
	const arr = new Array(length).fill(null)

	const inputRefs = useRef<(HTMLInputElement | null)[]>([])

	useEffect(() => {
		const idx = value.length
		inputRefs.current[idx]?.focus()
	}, [value])

	const styles = clsx([classes.root])

	return (
		<div className={styles}>
			{arr.map((_, idx) => (
				<Input
					ref={el => (inputRefs.current[idx] = el)}
					key={idx}
					onChange={e => onChange(value.replaceAt(idx, e.target.value))}
					value={value[idx] || ''}
				/>
			))}
		</div>
	)
}
