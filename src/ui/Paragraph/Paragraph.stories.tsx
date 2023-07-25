// Types
import type { Meta, StoryObj } from '@storybook/react'

// Components
import { Paragraph } from './Paragraph'

// Styles
import '@/assets/styles/index.scss'

// Setting Paragraph
const meta: Meta<typeof Paragraph> = {
	component: Paragraph,
}

export default meta

// Making Story
type Story = StoryObj<typeof Paragraph>

// Setting Story
export const Playground: Story = {
	args: {
		children: 'Paragraph',
	},
}
