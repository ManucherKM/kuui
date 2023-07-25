// Types
import type { Meta, StoryObj } from '@storybook/react'

// Components
import { SVGButton } from './SVGButton'

// Styles
import '@/assets/styles/index.scss'

// Setting SVGButton
const meta: Meta<typeof SVGButton> = {
	component: SVGButton,
}

export default meta

// Making Story
type Story = StoryObj<typeof SVGButton>

// SVG for the children field
const SVG = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="16"
		height="22"
		viewBox="0 0 16 22"
		fill="none"
	>
		<path
			d="M16 7.93C15.96 3.54 12.4 0 8 0C3.6 0 0.04 3.54 0 7.93V13.93C0 18.35 3.58 21.93 8 21.93C12.42 21.93 16 18.35 16 13.93V7.93ZM14 7.93H9V2.09C11.81 2.56 13.96 4.99 14 7.93ZM7 2.09V7.93H2C2.01881 6.52547 2.52939 5.17198 3.44292 4.10497C4.35646 3.03796 5.61514 2.32496 7 2.09ZM14 13.93C14 17.24 11.31 19.93 8 19.93C4.69 19.93 2 17.24 2 13.93V9.93H14V13.93Z"
			fill="#737373"
		/>
	</svg>
)

// Setting Story
export const Playground: Story = {
	args: {
		children: SVG,
	},
}
