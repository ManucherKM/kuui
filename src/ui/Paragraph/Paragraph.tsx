import { FC, HTMLAttributes } from 'react'
import clsx from 'clsx'
import classes from './Paragraph.module.scss'

export enum EParagraphDimension {
	large = 'large',
	medium = 'medium',
	small = 'small',
}

export enum EParagraphAlign {
	left = 'left',
	center = 'center',
	right = 'right',
	justify = 'justify',
}

export interface IParagraph extends HTMLAttributes<HTMLParagraphElement> {
	dimension?: `${EParagraphDimension}`
	align?: `${EParagraphAlign}`
}

export const Paragraph: FC<IParagraph> = ({
	children,
	dimension = EParagraphDimension.small,
	align,
	...props
}) => {
	const styles = clsx([
		classes.paragraph,
		classes[dimension],
		align && classes[align],
	])

	return (
		<p className={styles} {...props}>
			{children}
		</p>
	)
}
