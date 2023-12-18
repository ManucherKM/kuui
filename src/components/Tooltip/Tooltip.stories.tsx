// Types
import type { Meta, StoryObj } from '@storybook/react'

// Components
import { Button } from '@/ui'
import { Tooltip } from './Tooltip'

// Styles
import '@/assets/styles/index.scss'

// Setting Tooltip
const meta: Meta<typeof Tooltip> = {
	component: Tooltip,
}

// Metadata to configure the stories for a component
export default meta

// Making Story
type Story = StoryObj<typeof Tooltip>

// Setting Story
export const Playground: Story = {
	args: {
		text: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
		className: 'myclass',
	},
	render: args => (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				width: '100%',
				height: '100vh',
			}}
		>
			<Tooltip {...args}>
				<Button variant="active">Hover me</Button>
			</Tooltip>
		</div>
	),
}
