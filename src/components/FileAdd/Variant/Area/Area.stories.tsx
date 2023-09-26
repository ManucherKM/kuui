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

export default meta

// Making Story
type Story = StoryObj<typeof Area>

// Setting Story
export const Playground: Story = {
	args: {
		fill: 'all',
	},
}
