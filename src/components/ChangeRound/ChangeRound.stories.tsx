// Types
import type { Meta, StoryObj } from '@storybook/react'

// Components
import { ChangeRound } from './ChangeRound'

// Styles
import '@/assets/styles/index.scss'

// Setting ChangeRound
const meta: Meta<typeof ChangeRound> = {
	component: ChangeRound,
}

// Metadata to configure the stories for a component
export default meta

// Making Story
type Story = StoryObj<typeof ChangeRound>

// Setting Story
export const Playground: Story = {}
