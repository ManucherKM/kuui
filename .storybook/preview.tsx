import type { Preview } from '@storybook/react'
import React from 'react'
import { MemoryRouter } from 'react-router-dom'

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: '^on[A-Z].*' },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
		backgrounds: {
			default: 'black',
			values: [
				{
					name: 'black',
					value: '#242526',
				},
			],
		},
	},
}

export default preview

export const decorators = [
	Story => (
		<MemoryRouter initialEntries={['/']}>
			<Story />
		</MemoryRouter>
	),
]
