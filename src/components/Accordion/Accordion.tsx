// Types
import type { FC, HTMLAttributes, ReactNode } from 'react'

// Utils
import clsx from 'clsx'

// Styles
import classes from './Accordion.module.scss'

// Components
import { Item } from './Item/Item'

/** Allowable Accordion types. */
export type TAccordion = HTMLAttributes<HTMLDivElement>

/** Interface for accordion elements. */
export interface IAccordionItem {
	/** A title for a specific accordion element. */
	name: string

	/**
	 * Content that will be displayed when a specific accordion element is
	 * expanded.
	 */
	body: ReactNode
}

/** IItem component interface. */
export interface IAccordion extends TAccordion {
	/** An array of accordion elements. */
	items: IAccordionItem[]

	autoTabIndex: boolean
}

/**
 * With the Accordion component you can add a list of Item components with
 * titles and descriptions to that title, for example to answer frequently asked
 * questions from users. Below is an example of its use.
 *
 * @example
 * 	;<Accordion
 * 		items={[
 * 			{ name: 'Question 1', body: <Paragraph>Answer 1</Paragraph> },
 * 			{ name: 'Question 2', body: <Paragraph>Answer 2</Paragraph> },
 * 			{ name: 'Question 3', body: <Paragraph>Answer 3</Paragraph> },
 * 		]}
 * 	/>
 */
export const Accordion: FC<IAccordion> = ({
	items,
	className,
	autoTabIndex,
	...props
}) => {
	// Put all used style classes into the "styles" variable.
	const styles = clsx([classes.root, className])

	return (
		<div className={styles} {...props}>
			{items.map((item, idx) => (
				<Item key={idx} name={item.name} autoTabIndex={autoTabIndex}>
					{item.body}
				</Item>
			))}
		</div>
	)
}
