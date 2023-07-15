import { FC, AnchorHTMLAttributes } from 'react'
import clsx from 'clsx'
import classes from './Link.module.scss'

export enum ELinkDimension {
	large = 'large',
	medium = 'medium',
	small = 'small',
}

export enum ELinkAlign {
	left = 'left',
	center = 'center',
	right = 'right',
}

export interface ILink extends AnchorHTMLAttributes<HTMLAnchorElement> {
	dimension?: `${ELinkDimension}`
	align?: `${ELinkAlign}`
}

const Link: FC<ILink> = ({
	children,
	dimension = ELinkDimension.small,
	align,
	...props
}) => {
	const styles = clsx([
		classes.link,
		classes[dimension],
		align && classes[align],
	])

	return (
		<a className={styles} {...props}>
			{children}
		</a>
	)
}

export default Link
