import { FC, HTMLAttributes } from 'react'
import classes from './Title.module.scss'
import clsx from 'clsx'

enum ETitleVariant {
	large = 'large',
	medium = 'medium',
	small = 'small',
}

enum ETitleAlign {
	left = 'left',
	center = 'center',
	right = 'right',
}

interface ITitle extends HTMLAttributes<HTMLHeadingElement> {
	variant?: `${ETitleVariant}`
	align?: `${ETitleAlign}`
}

const Title: FC<ITitle> = ({ children, variant = ETitleVariant.medium, align, ...props }) => {
	const styles = clsx([classes.title, classes[variant], align && classes[align]])

	return (
		<h1 className={styles} {...props}>
			{children}
		</h1>
	)
}

export default Title
