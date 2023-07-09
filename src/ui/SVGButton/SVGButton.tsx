import classes from './SVGButton.module.scss'
import { FC, HTMLAttributes } from 'react'

interface ISVGButton extends HTMLAttributes<HTMLDivElement> {}

const SVGButton: FC<ISVGButton> = ({ children, ...props }) => {
	return (
		<div className={classes.svgButton} {...props}>
			{children}
		</div>
	)
}

export default SVGButton
