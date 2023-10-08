// Types
import type { Meta, StoryObj } from '@storybook/react'

// Components
import { OTP } from './OTP'

// Styles
import '@/assets/styles/index.scss'

// Core
import '@/core'

// Setting OTP
const meta: Meta<typeof OTP> = {
	component: OTP,
}

// Metadata to configure the stories for a component
export default meta

// Making Story
type Story = StoryObj<typeof OTP>

// Setting Story
export const Playground: Story = {
	args: {
		value: '345132',
		length: 6,
		onChange: console.log,
	},
}
