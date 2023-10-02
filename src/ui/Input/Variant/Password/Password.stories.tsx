// Types
import type { Meta, StoryObj } from '@storybook/react'

// Components
import { Password } from './Password'

// Styles
import '@/assets/styles/index.scss'

// Setting Password
const meta: Meta<typeof Password> = {
	component: Password,
}

// Metadata to configure the stories for a component
export default meta

// Making Story
type Story = StoryObj<typeof Password>

// Setting Story
export const Playground: Story = {
	args: {
		placeholder: 'password',
	},
}
