// Types
import type { Meta, StoryObj } from '@storybook/react'

// Components
import { Select } from './Select'
import { IOption, Option } from '../Option/Option'

// Styles
import '@/assets/styles/index.scss'

// Setting Select
const meta: Meta<typeof Select> = {
	component: Select,
}

export default meta

// Making Story
type Story = StoryObj<typeof Select>

const options: IOption[] = [
	{
		text: 'Trash',
		icon: (
			<svg width="20" height="20" viewBox="0,0,256,256">
				<g
					fillRule="nonzero"
					stroke="none"
					strokeWidth="1"
					strokeLinecap="butt"
					strokeLinejoin="miter"
					strokeMiterlimit="10"
				>
					<g transform="scale(5.12,5.12)">
						<path d="M21,0c-1.64453,0 -3,1.35547 -3,3v2h-7.8125c-0.125,-0.02344 -0.25,-0.02344 -0.375,0h-1.8125c-0.03125,0 -0.0625,0 -0.09375,0c-0.55078,0.02734 -0.98047,0.49609 -0.95312,1.04688c0.02734,0.55078 0.49609,0.98047 1.04688,0.95313h1.09375l3.59375,40.5c0.125,1.39844 1.31641,2.5 2.71875,2.5h19.1875c1.40234,0 2.59375,-1.10156 2.71875,-2.5l3.59375,-40.5h1.09375c0.35938,0.00391 0.69531,-0.18359 0.87891,-0.49609c0.17969,-0.3125 0.17969,-0.69531 0,-1.00781c-0.18359,-0.3125 -0.51953,-0.5 -0.87891,-0.49609h-10v-2c0,-1.64453 -1.35547,-3 -3,-3zM21,2h8c0.5625,0 1,0.4375 1,1v2h-10v-2c0,-0.5625 0.4375,-1 1,-1zM11.09375,7h27.8125l-3.59375,40.34375c-0.03125,0.34766 -0.40234,0.65625 -0.71875,0.65625h-19.1875c-0.31641,0 -0.6875,-0.30859 -0.71875,-0.65625zM18.90625,9.96875c-0.04297,0.00781 -0.08594,0.01953 -0.125,0.03125c-0.46484,0.10547 -0.79297,0.52344 -0.78125,1v33c-0.00391,0.35938 0.18359,0.69531 0.49609,0.87891c0.3125,0.17969 0.69531,0.17969 1.00781,0c0.3125,-0.18359 0.5,-0.51953 0.49609,-0.87891v-33c0.01172,-0.28906 -0.10547,-0.56641 -0.3125,-0.76172c-0.21094,-0.19922 -0.49609,-0.29687 -0.78125,-0.26953zM24.90625,9.96875c-0.04297,0.00781 -0.08594,0.01953 -0.125,0.03125c-0.46484,0.10547 -0.79297,0.52344 -0.78125,1v33c-0.00391,0.35938 0.18359,0.69531 0.49609,0.87891c0.3125,0.17969 0.69531,0.17969 1.00781,0c0.3125,-0.18359 0.5,-0.51953 0.49609,-0.87891v-33c0.01172,-0.28906 -0.10547,-0.56641 -0.3125,-0.76172c-0.21094,-0.19922 -0.49609,-0.29687 -0.78125,-0.26953zM30.90625,9.96875c-0.04297,0.00781 -0.08594,0.01953 -0.125,0.03125c-0.46484,0.10547 -0.79297,0.52344 -0.78125,1v33c-0.00391,0.35938 0.18359,0.69531 0.49609,0.87891c0.3125,0.17969 0.69531,0.17969 1.00781,0c0.3125,-0.18359 0.5,-0.51953 0.49609,-0.87891v-33c0.01172,-0.28906 -0.10547,-0.56641 -0.3125,-0.76172c-0.21094,-0.19922 -0.49609,-0.29687 -0.78125,-0.26953z"></path>
					</g>
				</g>
			</svg>
		),
	},
	{
		text: 'Download',
		icon: (
			<svg width="20px" height="20px" viewBox="0 0 24 24" fill="none">
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12ZM12 6.25C12.4142 6.25 12.75 6.58579 12.75 7V12.1893L14.4697 10.4697C14.7626 10.1768 15.2374 10.1768 15.5303 10.4697C15.8232 10.7626 15.8232 11.2374 15.5303 11.5303L12.5303 14.5303C12.3897 14.671 12.1989 14.75 12 14.75C11.8011 14.75 11.6103 14.671 11.4697 14.5303L8.46967 11.5303C8.17678 11.2374 8.17678 10.7626 8.46967 10.4697C8.76256 10.1768 9.23744 10.1768 9.53033 10.4697L11.25 12.1893V7C11.25 6.58579 11.5858 6.25 12 6.25ZM8 16.25C7.58579 16.25 7.25 16.5858 7.25 17C7.25 17.4142 7.58579 17.75 8 17.75H16C16.4142 17.75 16.75 17.4142 16.75 17C16.75 16.5858 16.4142 16.25 16 16.25H8Z"
				/>
			</svg>
		),
	},
	{
		text: 'Share',
		icon: (
			<svg width="20" height="20" viewBox="0,0,256,256">
				<g
					fillRule="nonzero"
					stroke="none"
					stroke-width="1"
					stroke-linecap="butt"
					stroke-linejoin="miter"
					stroke-miterlimit="10"
				>
					<g transform="scale(5.12,5.12)">
						<path d="M4,4v40c0.00011,1.10452 0.89548,1.99989 2,2h38c1.10452,-0.00011 1.99989,-0.89548 2,-2v-12h-4v10h-34v-38zM35.97852,4.98047c-0.81349,0.00101 -1.54534,0.49459 -1.85108,1.24844c-0.30574,0.75385 -0.12447,1.61777 0.4585,2.18515l2.58594,2.58594h-1.12305c-10.07192,-0.25066 -16.43022,1.31546 -20.0957,5.72656c-3.66548,4.4111 -4.1218,10.78613 -3.95312,19.3125c0.02157,1.10457 0.93449,1.98251 2.03906,1.96094c1.10457,-0.02157 1.98251,-0.93449 1.96094,-2.03906c-0.16433,-8.30664 0.53378,-13.67654 3.0293,-16.67969c2.49552,-3.00315 7.3048,-4.52059 16.92188,-4.28125h0.02344h1.19727l-2.58594,2.58594c-0.52248,0.50163 -0.73295,1.24653 -0.55024,1.94742c0.18271,0.70088 0.73006,1.24823 1.43094,1.43094c0.70088,0.18271 1.44578,-0.02776 1.94742,-0.55024l5.82227,-5.82227c0.14436,-0.10967 0.27315,-0.23845 0.38281,-0.38281l1.20898,-1.20898l-1.20898,-1.20898c-0.11151,-0.14765 -0.24298,-0.27911 -0.39062,-0.39062l-5.81445,-5.81445c-0.37701,-0.38755 -0.89487,-0.60596 -1.43555,-0.60547z"></path>
					</g>
				</g>
			</svg>
		),
	},
]

// Setting Story
export const Playground: Story = {
	args: {
		children: (
			<>
				{options.map(option => (
					<Option icon={option.icon} text={option.text} />
				))}
			</>
		),
	},
}