// Types
import type { Meta, StoryObj } from '@storybook/react'

// Components
import { Radio } from './Radio'

// Styles
import '@/assets/styles/index.scss'

// Setting Radio
const meta: Meta<typeof Radio> = {
	component: Radio,
}

export default meta

// Making Story
type Story = StoryObj<typeof Radio>

// Setting Story
export const Playground: Story = {}
