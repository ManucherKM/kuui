// Types
import type { Meta, StoryObj } from '@storybook/react'

// Components
import { FileAdd } from './FileAdd'

// Styles
import '@/assets/styles/index.scss'

// Setting FileAdd
const meta: Meta<typeof FileAdd> = {
	component: FileAdd,
}

export default meta

// Making Story
type Story = StoryObj<typeof FileAdd>

// Setting Story
export const Playground: Story = {
	args: {
		fill: 'all',
	},
}
