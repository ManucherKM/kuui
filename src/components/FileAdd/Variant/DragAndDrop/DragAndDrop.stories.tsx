// Types
import type { Meta, StoryObj } from '@storybook/react'

// Components
import { DragAndDrop } from './DragAndDrop'

// Styles
import '@/assets/styles/index.scss'

// Setting DragAndDrop
const meta: Meta<typeof DragAndDrop> = {
	component: DragAndDrop,
}

export default meta

// Making Story
type Story = StoryObj<typeof DragAndDrop>

// Setting Story
export const Playground: Story = {
	args: {
		fill: 'all',
	},
}
