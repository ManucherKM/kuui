import { FC, HTMLAttributes } from 'react'
import clsx from 'clsx'
import classes from './Subtitle.module.scss'

enum ESubtitleDimension {
	large = 'large',
	medium = 'medium',
	small = 'small',
}

enum ESubtitleAlign {
	left = 'left',
	center = 'center',
	right = 'right',
}

interface ISubtitle extends HTMLAttributes<HTMLHeadingElement> {
	dimension?: `${ESubtitleDimension}`
	align?: `${ESubtitleAlign}`
}

const Subtitle: FC<ISubtitle> = ({ children, dimension = ESubtitleDimension.medium, align, ...props }) => {
	const styles = clsx([classes.subtitle, classes[dimension], align && classes[align]])

	return (
		<h2 className={styles} {...props}>
			{children}
		</h2>
	)
}

export default Subtitle
