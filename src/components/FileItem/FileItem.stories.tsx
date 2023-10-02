// Types
import type { Meta, StoryObj } from '@storybook/react'

// Components
import { FileItem } from './FileItem'

// Styles
import '@/assets/styles/index.scss'

// Setting FileItem
const meta: Meta<typeof FileItem> = {
	component: FileItem,
}

// Metadata to configure the stories for a component
export default meta

// Making Story
type Story = StoryObj<typeof FileItem>

// Setting Story
export const Playground: Story = {
	args: {
		extension: 'word',
		name: 'Mike smith',
		isActive: true,
	},
}
