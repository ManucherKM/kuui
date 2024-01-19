// Types
import type { Meta, StoryObj } from '@storybook/react'

// Components
import { FileAdd } from './FileAdd'

// Styles
import '@/assets/styles/index.scss'

// Setting FileAdd
const meta: Meta<typeof FileAdd> = {
	component: FileAdd,
}

// Metadata to configure the stories for a component
export default meta

// Making Story
type Story = StoryObj<typeof FileAdd>

// Setting Story
export const Playground: Story = {
	args: {
		variant: 'area',
		onChangeFiles: console.log,
		fill: 'fixed',
	},
}
