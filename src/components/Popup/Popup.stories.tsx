// Types
import type { Meta, StoryObj } from '@storybook/react'

// Components
import { Button } from '@/ui/Button/Button'
import { Popup } from './Popup'

// Styles
import '@/assets/styles/index.scss'

// Setting Popup
const meta: Meta<typeof Popup> = {
	component: Popup,
}

// Metadata to configure the stories for a component
export default meta

// Making Story
type Story = StoryObj<typeof Popup>

// Setting Story
export const Playground: Story = {
	args: {
		children: <Button variant="active">Button</Button>,
	},
}
