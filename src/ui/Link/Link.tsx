import { FC, AnchorHTMLAttributes } from 'react'
import clsx from 'clsx'
import classes from './Link.module.scss'

enum ELinkSize {
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
	size?: `${ELinkSize}`
	align?: `${ELinkAlign}`
}

const Link: FC<ILink> = ({ children, size = ELinkSize.small, align, ...props }) => {
	const styles = clsx([classes.link, classes[size], align && classes[align]])

	return (
		<a className={styles} {...props}>
			{children}
		</a>
	)
}

export default Link
