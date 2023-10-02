// Types
import type { Meta, StoryObj } from '@storybook/react'

// Components
import { Item } from './Item'
import { Paragraph } from '@/ui/Paragraph/Paragraph'

// Styles
import '@/assets/styles/index.scss'

// Setting Item
const meta: Meta<typeof Item> = {
	component: Item,
}

// Metadata to configure the stories for a component
export default meta

// Making Story
type Story = StoryObj<typeof Item>

// Setting Story
export const Playground: Story = {
	args: {
		name: 'Paragraph?',
		children: (
			<Paragraph>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Non aspernatur
				accusamus corporis hic ipsa quia.
			</Paragraph>
		),
	},
}
