// Types
import type { Meta, StoryObj } from '@storybook/react'

// Components
import { Title } from './Title'

// Styles
import '@/assets/styles/index.scss'

// Setting Title
const meta: Meta<typeof Title> = {
	component: Title,
}

// Metadata to configure the stories for a component
export default meta

// Making Story
type Story = StoryObj<typeof Title>

// Setting Story
export const Playground: Story = {
	args: {
		children: 'Title',
	},
}
