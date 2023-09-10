// Types
import type { Meta, StoryObj } from '@storybook/react'

// Components
import { VKAuth } from './VKAuth'

// Styles
import '@/assets/styles/index.scss'

// Setting VKAuth
const meta: Meta<typeof VKAuth> = {
	component: VKAuth,
}

export default meta

// Making Story
type Story = StoryObj<typeof VKAuth>

// Setting Story
export const Playground: Story = {
	args: {
		variant: 'small',
	},
}
