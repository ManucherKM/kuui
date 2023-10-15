// Types
import type { Meta, StoryObj } from '@storybook/react'

// Components
import { Theme } from './Theme'

// Styles
import '@/assets/styles/index.scss'

// Setting Theme
const meta: Meta<typeof Theme> = {
	component: Theme,
}

// Metadata to configure the stories for a component
export default meta

// Making Story
type Story = StoryObj<typeof Theme>

// Setting Story
export const Playground: Story = {
	args: {
		bg: 'red',
	},
}
