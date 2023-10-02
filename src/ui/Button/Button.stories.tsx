// Types
import type { Meta, StoryObj } from '@storybook/react'

// Components
import { Button } from './Button'

// Styles
import '@/assets/styles/index.scss'

// Setting Button
const meta: Meta<typeof Button> = {
	component: Button,
}

// Metadata to configure the stories for a component
export default meta

// Making Story
type Story = StoryObj<typeof Button>

// Setting Story
export const Playground: Story = {
	args: {
		children: 'Click',
	},
}
