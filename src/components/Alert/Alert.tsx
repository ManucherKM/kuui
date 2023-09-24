import { FC, HTMLAttributes, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import classes from './Alert.module.scss'
import clsx from 'clsx'

export enum EAlertVariant {
	message = 'message',
	error = 'error',
}

export enum EAlertAppearance {
	above = 'above',
	fromBelow = 'fromBelow',
}

export interface IAlert extends HTMLAttributes<HTMLDivElement> {
	variant?: `${EAlertVariant}`
	appearance?: `${EAlertAppearance}`
	text: string
	time: number
}

export const Alert: FC<IAlert> = ({
	variant = EAlertVariant.message,
	text,
	className,
	appearance = EAlertAppearance.above,
	time,
	...props
}) => {
	const [isRender, setIsRender] = useState<boolean>(true)

	const styles = clsx([
		classes.wrapper,
		classes[variant],
		classes[appearance],
		className,
	])

	useEffect(() => {
		setTimeout(() => {
			setIsRender(false)
		}, time * 1000)
	}, [isRender])
	return (
		<>
			{isRender &&
				createPortal(
					<div className={styles} {...props}>
						<span className={classes.text}>{text}</span>
					</div>,
					document.body,
				)}
		</>
	)
}
