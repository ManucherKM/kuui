// Types
import type { Meta, StoryObj } from '@storybook/react'

// Components
import { Loader } from './Loader'

// Styles
import '@/assets/styles/index.scss'

// Setting Loader
const meta: Meta<typeof Loader> = {
	component: Loader,
}

export default meta

// Making Story
type Story = StoryObj<typeof Loader>

// Setting Story
export const Playground: Story = {}
