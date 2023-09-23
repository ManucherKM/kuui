// Types
import type { FC, HTMLAttributes, ReactNode } from 'react'

// Styles
import classes from './Accordion.module.scss'

// Components
import { Item } from './Item/Item'
import clsx from 'clsx'

/** Allowable Accordion types. */
export type TAccordion = HTMLAttributes<HTMLDivElement>

/** Interface for accordion elements. */
export interface IAccordionItem {
	name: string
	body: ReactNode
}

/** IItem component interface. */
export interface IAccordion extends TAccordion {
	items: IAccordionItem[]
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
export const Accordion: FC<IAccordion> = ({ items, className, ...props }) => {
	const styles = clsx([classes.wrapper, className])

	return (
		<div className={styles} {...props}>
			{items.map((item, idx) => (
				<Item key={idx} name={item.name}>
					{item.body}
				</Item>
			))}
		</div>
	)
}
