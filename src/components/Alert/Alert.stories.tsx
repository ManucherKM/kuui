// Types
import type { Meta, StoryObj } from '@storybook/react'

// Components
import { Alert } from './Alert'

// Styles
import '@/assets/styles/index.scss'

// Setting Alert
const meta: Meta<typeof Alert> = {
	component: Alert,
}

export default meta

// Making Story
type Story = StoryObj<typeof Alert>

// Setting Story
export const Playground: Story = {
	args: {
		text: 'Your text',
		variant: 'error',
		time: 2,
		appearance: 'above',
	},
}
