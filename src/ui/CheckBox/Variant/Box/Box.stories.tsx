// Types
import type { Meta, StoryObj } from '@storybook/react'

// Components
import { Box } from './Box'

// Styles
import '@/assets/styles/index.scss'

// Setting Box
const meta: Meta<typeof Box> = {
	component: Box,
}

export default meta

// Making Story
type Story = StoryObj<typeof Box>

// Setting Story
export const Playground: Story = {}
