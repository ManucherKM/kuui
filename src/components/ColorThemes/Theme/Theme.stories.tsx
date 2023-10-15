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
		theme: {
			black1000: '#22272e',
			black500: '#272e35',
			black250: '#6d7887',
			dominant1: 'red',
			dominant2: '#cbd0df',
			warning: '#ef6c75',
		},
	},
}
