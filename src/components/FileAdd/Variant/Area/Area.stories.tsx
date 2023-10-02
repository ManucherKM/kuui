// Types
import type { Meta, StoryObj } from '@storybook/react'

// Components
import { Area } from './Area'

// Styles
import '@/assets/styles/index.scss'

// Setting Area
const meta: Meta<typeof Area> = {
	component: Area,
}

// Metadata to configure the stories for a component
export default meta

// Making Story
type Story = StoryObj<typeof Area>

// Setting Story
export const Playground: Story = {
	args: {
		fill: 'all',
	},
}
