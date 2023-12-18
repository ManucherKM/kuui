import clsx from 'clsx'
import { useState, type FC, type ReactNode } from 'react'
import classes from './Tooltip.module.scss'

export enum EPosition {
	top = 'top',
	bottom = 'bottom',
	right = 'right',
	left = 'left',
}

export interface ITooltip {
	text: string
	children: ReactNode
	position?: `${EPosition}`
}

export const Tooltip: FC<ITooltip> = ({
	text,
	children,
	position = EPosition.top,
}) => {
	const [isShow, setIsShow] = useState<boolean>(true)

	function mouseEnterHandler() {
		setIsShow(true)
	}

	function mouseLeaveHandler() {
		setIsShow(false)
	}

	const stylesText = clsx([classes.tooltip, classes[position]])
	return (
		<div
			className={classes.root}
			onMouseEnter={mouseEnterHandler}
			onMouseLeave={mouseLeaveHandler}
		>
			{isShow && <div className={stylesText}>{text}</div>}
			{children}
		</div>
	)
}
