// Types
import type { Meta, StoryObj } from '@storybook/react'

// Components
import { TextError } from './TextError'

// Styles
import '@/assets/styles/index.scss'

// Setting TextError
const meta: Meta<typeof TextError> = {
	component: TextError,
}

// Metadata to configure the stories for a component
export default meta

// Making Story
type Story = StoryObj<typeof TextError>

// Setting Story
export const Playground: Story = {
	args: { children: 'Error' },
}
