import { FC, HTMLAttributes } from 'react'
import clsx from 'clsx'
import classes from './Subtitle.module.scss'

enum ESubtitleSize {
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
	size?: `${ESubtitleSize}`
	align?: `${ESubtitleAlign}`
}

const Subtitle: FC<ISubtitle> = ({ children, size = ESubtitleSize.medium, align, ...props }) => {
	const styles = clsx([classes.subtitle, classes[size], align && classes[align]])

	return (
		<h2 className={styles} {...props}>
			{children}
		</h2>
	)
}

export default Subtitle
