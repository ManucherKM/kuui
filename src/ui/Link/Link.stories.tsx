// Types
import type { Meta, StoryObj } from '@storybook/react'

// Components
import { Link } from './Link'

// Styles
import '@/assets/styles/index.scss'

// Setting Link
const meta: Meta<typeof Link> = {
	component: Link,
}

export default meta

// Making Story
type Story = StoryObj<typeof Link>

// Setting Story
export const Playground: Story = {
	args: {
		children: 'Link',
	},
}
