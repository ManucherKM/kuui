import clsx from 'clsx'
import { HTMLAttributes, useState, type FC, type ReactNode } from 'react'
import classes from './Tooltip.module.scss'

export enum EPosition {
	top = 'top',
	bottom = 'bottom',
	right = 'right',
	left = 'left',
}

export enum EAlign {
	left = 'left',
	right = 'right',
	center = 'center',
	justify = 'justify',
}

export interface ITooltip extends HTMLAttributes<HTMLSpanElement> {
	text: string
	children: ReactNode
	position?: `${EPosition}`
	align: `${EAlign}`
}

export const Tooltip: FC<ITooltip> = ({
	text,
	children,
	position = EPosition.top,
	align = EAlign.left,
	className,
	...props
}) => {
	const [isShow, setIsShow] = useState<boolean>(false)

	function mouseEnterHandler() {
		setIsShow(true)
	}

	function mouseLeaveHandler() {
		setIsShow(false)
	}

	const stylesText = clsx([
		classes.tooltip,
		classes[position],
		classes[align],
		className,
	])
	return (
		<div
			className={classes.root}
			onMouseEnter={mouseEnterHandler}
			onMouseLeave={mouseLeaveHandler}
		>
			{children}
			{isShow && (
				<span {...props} className={stylesText} title="">
					{text}
				</span>
			)}
		</div>
	)
}
