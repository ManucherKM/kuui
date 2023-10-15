// Types
import type { Meta, StoryObj } from '@storybook/react'

// Components
import { AddTheme } from './AddTheme'

// Styles
import '@/assets/styles/index.scss'

// Setting AddTheme
const meta: Meta<typeof AddTheme> = {
	component: AddTheme,
}

// Metadata to configure the stories for a component
export default meta

// Making Story
type Story = StoryObj<typeof AddTheme>

// Setting Story
export const Playground: Story = {}
