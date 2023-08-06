// Types
import type { Meta, StoryObj } from '@storybook/react'

// Components
import { Accordion } from './Accordion'

// Styles
import '@/assets/styles/index.scss'
import { Paragraph } from '@/ui/Paragraph/Paragraph'

// Setting Accordion
const meta: Meta<typeof Accordion> = {
	component: Accordion,
}

export default meta

// Making Story
type Story = StoryObj<typeof Accordion>

// Setting Story
export const Playground: Story = {
	args: {
		items: [
			{ name: 'Question 1', body: <Paragraph>Answer 1</Paragraph> },
			{ name: 'Question 2', body: <Paragraph>Answer 2</Paragraph> },
			{ name: 'Question 3', body: <Paragraph>Answer 3</Paragraph> },
		],
	},
}
