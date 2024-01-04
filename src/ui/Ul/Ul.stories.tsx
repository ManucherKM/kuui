// Types
import type { Meta, StoryObj } from '@storybook/react'

// Components
import { Paragraph } from '../Paragraph/Paragraph'
import { Ul } from './Ul'

// Styles
import '@/assets/styles/index.scss'

// Setting Ul
const meta: Meta<typeof Ul> = {
	component: Ul,
}

// Metadata to configure the stories for a component
export default meta

// Making Story
type Story = StoryObj<typeof Ul>

// Setting Story
export const Playground: Story = {
	args: {
		items: [
			{
				children: (
					<Paragraph>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi,
						facere?
					</Paragraph>
				),
			},
			{
				children: (
					<Paragraph>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi,
						facere?
					</Paragraph>
				),
			},
			{
				children: (
					<Paragraph>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi,
						facere?
					</Paragraph>
				),
			},
		],
	},
}
