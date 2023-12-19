// Types
import type { Meta, StoryObj } from '@storybook/react'

// Components
import { Skeleton } from './Skeleton'

// Styles
import '@/assets/styles/index.scss'

// Setting Skeleton
const meta: Meta<typeof Skeleton> = {
	component: Skeleton,
}

// Metadata to configure the stories for a component
export default meta

// Making Story
type Story = StoryObj<typeof Skeleton>

// Setting Story
export const Playground: Story = {
	args: {
		style: {
			borderRadius: '12px',
			width: '200px',
			height: '100px',
		},
	},
}
