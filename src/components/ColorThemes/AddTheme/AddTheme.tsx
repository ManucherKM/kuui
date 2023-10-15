// Types
import type { FC, HTMLAttributes } from 'react'

// Utils
import clsx from 'clsx'

// Components
import { Plus } from '@/assets/icons'

// Styles
import classes from './AddTheme.module.scss'

/** Allowable AddTheme types. */
export type TAddTheme = HTMLAttributes<HTMLDivElement>

/** AddTheme component interface. */
export interface IAddTheme extends TAddTheme {}

/**
 * This component is a stylized "div" tag that can be used as a button to add
 * new user color themes. Below you can see an example of its use.
 *
 * @example
 * 	;<AddTheme onClick={console.log} />
 */
export const AddTheme: FC<IAddTheme> = ({ className, ...props }) => {
	// Put all used style classes into the "styles" variable.
	const styles = clsx([classes.root, className])
	return (
		<div className={styles} {...props}>
			<Plus width="24px" height="24px" />
		</div>
	)
}
