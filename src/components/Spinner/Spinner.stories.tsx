// Types
import type { Meta, StoryObj } from '@storybook/react'

// Components
import { Spinner } from './Spinner'

// Styles
import '@/assets/styles/index.scss'

// Setting Spinner
const meta: Meta<typeof Spinner> = {
	component: Spinner,
}

export default meta

// Making Story
type Story = StoryObj<typeof Spinner>

// Setting Story
export const Playground: Story = {}
