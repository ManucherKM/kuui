import { FC, HTMLAttributes } from 'react'
import clsx from 'clsx'
import classes from './Paragraph.module.scss'

enum EParagraphSize {
	large = 'large',
	medium = 'medium',
	small = 'small',
}

enum EParagraphAlign {
	left = 'left',
	center = 'center',
	right = 'right',
	justify = 'justify',
}

interface IParagraph extends HTMLAttributes<HTMLParagraphElement> {
	size?: `${EParagraphSize}`
	align?: `${EParagraphAlign}`
}

const Paragraph: FC<IParagraph> = ({ children, size = EParagraphSize.small, align, ...props }) => {
	const styles = clsx([classes.paragraph, classes[size], align && classes[align]])

	return (
		<p className={styles} {...props}>
			{children}
		</p>
	)
}

export default Paragraph
