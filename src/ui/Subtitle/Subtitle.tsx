import { FC, HTMLAttributes } from 'react'
import clsx from 'clsx'
import classes from './Subtitle.module.scss'

enum ESubtitleVariant {
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
	variant?: `${ESubtitleVariant}`
	align?: `${ESubtitleAlign}`
}

const Subtitle: FC<ISubtitle> = ({ children, variant = ESubtitleVariant.medium, align, ...props }) => {
	const styles = clsx([classes.subtitle, classes[variant], align && classes[align]])

	return (
		<h2 className={styles} {...props}>
			{children}
		</h2>
	)
}

export default Subtitle
