// Types
import type { Meta, StoryObj } from '@storybook/react'

// Components
import { Input } from './Input'

// Styles
import '@/assets/styles/index.scss'

// Setting Input
const meta: Meta<typeof Input> = {
	component: Input,
}

export default meta

// Making Story
type Story = StoryObj<typeof Input>

// Setting Story
export const Playground: Story = {
	args: {
		placeholder: 'Placeholder',
		value: 'test@gmail.com',
	},
}
