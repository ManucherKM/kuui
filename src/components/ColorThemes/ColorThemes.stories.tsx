// Types
import type { Meta, StoryObj } from '@storybook/react'

// Components
import { ColorThemes } from './ColorThemes'

// Styles
import '@/assets/styles/index.scss'

// Setting ColorThemes
const meta: Meta<typeof ColorThemes> = {
	component: ColorThemes,
}

// Metadata to configure the stories for a component
export default meta

// Making Story
type Story = StoryObj<typeof ColorThemes>

// Setting Story
export const Playground: Story = {
	args: {
		addTheme: true,
		themes: [
			{
				black1000: '#22272e',
				black500: '#272e35',
				black250: '#6d7887',
				dominant1: 'red',
				dominant2: '#cbd0df',
				warning: '#ef6c75',
			},
		],
		fill: 'fixed',
	},
}
