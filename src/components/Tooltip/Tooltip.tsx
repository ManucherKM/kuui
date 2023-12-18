import clsx from 'clsx'
import {
	CSSProperties,
	useEffect,
	useRef,
	useState,
	type FC,
	type ReactNode,
} from 'react'
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
	const [isShow, setIsShow] = useState<boolean>(false)
	const tooltipRef = useRef<HTMLSpanElement | null>(null)
	const [tooltipInlineStyles, setTooltipInlineStyles] = useState<CSSProperties>(
		{},
	)

	function mouseEnterHandler() {
		setIsShow(true)
	}

	function mouseLeaveHandler() {
		setIsShow(false)
	}

	useEffect(() => {
		if (!tooltipRef.current) return

		if (!isShow) {
			setTooltipInlineStyles({})
			return
		}

		const { top, right, bottom, left, width, height } =
			tooltipRef.current.getBoundingClientRect()

		if (top < 0) {
			setTooltipInlineStyles(prev => ({
				...prev,
				top: '0px',
				transform: 'translateY(0)',
			}))
		}

		if (right > window.innerWidth) {
			setTooltipInlineStyles(prev => ({
				...prev,
				left: `calc(${window.innerWidth}px - ${width}px - 20px)`,
				transform: 'translateX(0)',
			}))
		}

		if (bottom > window.innerHeight) {
			setTooltipInlineStyles(prev => ({
				...prev,
				top: `calc(${window.innerHeight}px - ${height}px - 20px)`,
				transform: 'translateY(0)',
			}))
		}

		if (left < 0) {
			setTooltipInlineStyles(prev => ({
				...prev,
				left: '0px',
				transform: 'translateX(0)',
			}))
		}
	}, [isShow])

	const stylesText = clsx([classes.tooltip, classes[position]])
	return (
		<div
			className={classes.root}
			onMouseEnter={mouseEnterHandler}
			onMouseLeave={mouseLeaveHandler}
		>
			{children}
			{isShow && (
				<span
					ref={tooltipRef}
					className={stylesText}
					style={tooltipInlineStyles}
				>
					{text}
				</span>
			)}
		</div>
	)
}
