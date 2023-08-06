// Types
import type { FC, HTMLAttributes, ReactNode } from 'react'

// Styles
import classes from './Accordion.module.scss'
import { Item } from './Item/Item'

/**
 * Allowable Accordion types.
 */
export type TAccordion = Omit<HTMLAttributes<HTMLDivElement>, 'className'>

/**
 * Interface for accordion elements.
 */
export interface IAccordionItem {
	name: string
	body: ReactNode
}

/**
 * IItem component interface.
 */
export interface IAccordion extends TAccordion {
	items: IAccordionItem[]
}

/**
 * With the Accordion component you can add a list of Item components with titles and descriptions to that title, for example to answer frequently asked questions from users. Below is an example of its use.
 * @example
 * <Accordion
 * 	items={[
 * 			{ name: 'Question 1', body: <Paragraph>Answer 1</Paragraph> },
 * 			{ name: 'Question 2', body: <Paragraph>Answer 2</Paragraph> },
 * 			{ name: 'Question 3', body: <Paragraph>Answer 3</Paragraph> },
 * 	]}
 * />
 */
export const Accordion: FC<IAccordion> = ({ items, ...props }) => {
	return (
		<div className={classes.wrapper} {...props}>
			{items.map((item, idx) => (
				<Item key={idx} name={item.name}>
					{item.body}
				</Item>
			))}
		</div>
	)
}
