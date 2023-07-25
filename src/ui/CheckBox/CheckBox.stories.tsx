// Types
import type { Meta, StoryObj } from '@storybook/react'

// Components
import { CheckBox } from './CheckBox'

// Styles
import '@/assets/styles/index.scss'

// Setting CheckBox
const meta: Meta<typeof CheckBox> = {
	component: CheckBox,
}

export default meta

// Making Story
type Story = StoryObj<typeof CheckBox>

// Setting Story
export const Playground: Story = {
	args: {
		variant: 'box',
	},
}
