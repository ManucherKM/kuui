// Types
import type { Meta, StoryObj } from '@storybook/react'

// Components
import { GoogleAuth } from './GoogleAuth'

// Styles
import '@/assets/styles/index.scss'

// Setting GoogleAuth
const meta: Meta<typeof GoogleAuth> = {
	component: GoogleAuth,
}

export default meta

// Making Story
type Story = StoryObj<typeof GoogleAuth>

// Setting Story
export const Playground: Story = {
	args: {
		variant: 'small',
	},
}
