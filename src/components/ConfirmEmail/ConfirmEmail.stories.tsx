// Types
import type { Meta, StoryObj } from '@storybook/react'

// Components
import { ConfirmEmail } from './ConfirmEmail'

// Styles
import '@/assets/styles/index.scss'

// Setting ConfirmEmail
const meta: Meta<typeof ConfirmEmail> = {
	component: ConfirmEmail,
}

// Metadata to configure the stories for a component
export default meta

// Making Story
type Story = StoryObj<typeof ConfirmEmail>

// Setting Story
export const Playground: Story = {
	args: {
		fill: 'fixed',
		email: 'test@gmail.com',
	},
}
