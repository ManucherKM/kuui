// Types
import type { Meta, StoryObj } from '@storybook/react'

// Components
import { Text } from './Text'

// Styles
import '@/assets/styles/index.scss'

// Setting Text
const meta: Meta<typeof Text> = {
	component: Text,
}

// Metadata to configure the stories for a component
export default meta

// Making Story
type Story = StoryObj<typeof Text>

// Setting Story
export const Playground: Story = {
	args: {
		placeholder: 'text',
	},
}
