// Types
import type { Meta, StoryObj } from '@storybook/react'

// Components
import { SettingsPanel } from './SettingsPanel'

// Styles
import '@/assets/styles/index.scss'

// Setting SettingsPanel
const meta: Meta<typeof SettingsPanel> = {
	component: SettingsPanel,
}

export default meta

// Making Story
type Story = StoryObj<typeof SettingsPanel>

// Setting Story
export const Playground: Story = {
	args: {
		name: 'Name Setting',
		toggles: [
			{
				checked: false,
				callback: () => console.log('Click 1'),
			},
			{
				callback: () => console.log('Click 2'),
			},
			{
				checked: false,
				callback: () => console.log('Click 3'),
			},
		],
	},
}
