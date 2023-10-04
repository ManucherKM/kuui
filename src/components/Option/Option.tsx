// Types
import type {
	FC,
	HTMLAttributes,
	ReactElement,
	ReactNode,
	SVGProps,
} from 'react'

// Utils
import clsx from 'clsx'

// Styles
import classes from './Option.module.scss'

/** Enumeration of possible Option positions. */
export enum EOptionAlign {
	left = 'left',
	center = 'center',
	right = 'right',
}

/** Option component interface. */
export interface IOption extends HTMLAttributes<HTMLDivElement> {
	/** SVG icon */
	icon: ReactNode
	/** The text that will be placed in the Option component. */
	text: string
	/** Position */
	align?: `${EOptionAlign}`
}

/**
 * The Option component is a customized version of the classic HTML "option"
 * tag. Below you can see an example of its use.
 *
 * @example
 * 	;<Option text="Option" icon={<svg></svg>}>
 * 		Click me
 * 	</Option>
 */
export const Option: FC<IOption> = ({
	icon,
	text,
	align = EOptionAlign.center,
	className,
	...props
}) => {
	// Put all used style classes into the "styles" variable.
	const styles = clsx([classes.root, classes[align], className])

	return (
		<div className={styles} {...props}>
			{icon}
			<span className={classes.text}>{text}</span>
		</div>
	)
}
