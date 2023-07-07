import { FC, AnchorHTMLAttributes } from 'react'
import clsx from 'clsx'
import classes from './Link.module.scss'

enum ELinkVariant {
	large = 'large',
	medium = 'medium',
	small = 'small',
}

enum ELinkAlign {
	left = 'left',
	center = 'center',
	right = 'right',
}

interface ILink extends AnchorHTMLAttributes<HTMLAnchorElement> {
	variant?: `${ELinkVariant}`
	align?: `${ELinkAlign}`
}

const Link: FC<ILink> = ({ children, variant = ELinkVariant.small, align, ...props }) => {
	const styles = clsx([classes.link, classes[variant], align && classes[align]])

	return (
		<a className={styles} {...props}>
			{children}
		</a>
	)
}

export default Link
