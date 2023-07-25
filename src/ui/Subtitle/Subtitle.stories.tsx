// Types
import type { Meta, StoryObj } from '@storybook/react'

// Components
import { Subtitle } from './Subtitle'

// Styles
import '@/assets/styles/index.scss'

// Setting Subtitle
const meta: Meta<typeof Subtitle> = {
	component: Subtitle,
}

export default meta

// Making Story
type Story = StoryObj<typeof Subtitle>

// Setting Story
export const Playground: Story = {
	args: {
		children: 'Subtitle',
	},
}
