// Types
import type { Meta, StoryObj } from '@storybook/react'

// Components
import { ListThemes } from './ListThemes'

// Styles
import '@/assets/styles/index.scss'

// Setting ListThemes
const meta: Meta<typeof ListThemes> = {
	component: ListThemes,
}

// Metadata to configure the stories for a component
export default meta

// Making Story
type Story = StoryObj<typeof ListThemes>

// Setting Story
export const Playground: Story = {
	args: {
		themes: [
			{
				id: '1',
				black1000: '#1b1b1b',
				black500: '#292929',
				black250: '#808080',
				dominant1: '#ffa31a',
				dominant2: '#ffffff',
				warning: '#c71700',
			},
			{
				id: '2',
				black1000: '#212529',
				black500: '#282c31',
				black250: '#6e767f',
				dominant1: '#ced4da',
				dominant2: '#ced4da',
				warning: '#dc2f02',
			},
		],
	},
}
