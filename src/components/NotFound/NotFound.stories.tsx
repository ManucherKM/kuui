// Types
import type { Meta, StoryObj } from '@storybook/react'

// Components
import { NotFound } from './NotFound'

// Styles
import '@/assets/styles/index.scss'

// Setting PageNotFound
const meta: Meta<typeof NotFound> = {
	component: NotFound,
}

export default meta

// Making Story
type Story = StoryObj<typeof NotFound>

// Setting Story
export const Playground: Story = {}
