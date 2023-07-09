import Button from './ui/Button/Button'
import Link from './ui/Link/Link'
import Paragraph from './ui/Paragraph/Paragraph'
import SVGButton from './ui/SVGButton/SVGButton'
import Subtitle from './ui/Subtitle/Subtitle'
import Title from './ui/Title/Title'

const App = () => {
	return (
		<div>
			<Link>Link</Link>
			<Paragraph>Paragraph</Paragraph>
			<Title>Title</Title>
			<Subtitle>Subtitle</Subtitle>
			<SVGButton>
				<svg xmlns="http://www.w3.org/2000/svg" width="10" height="20" viewBox="0 0 152 216" fill="none">
					<path
						d="M92 0H60C44.0927 0.0185261 28.8422 6.34589 17.5941 17.5941C6.34589 28.8422 0.0185261 44.0927 0 60V156C0.0185261 171.907 6.34589 187.158 17.5941 198.406C28.8422 209.654 44.0927 215.981 60 216H92C107.907 215.981 123.158 209.654 134.406 198.406C145.654 187.158 151.981 171.907 152 156V60C151.981 44.0927 145.654 28.8422 134.406 17.5941C123.158 6.34589 107.907 0.0185261 92 0ZM144 60V88H80V8H92C105.786 8.01588 119.004 13.4995 128.752 23.248C138.5 32.9964 143.984 46.2136 144 60ZM60 8H72V88H8V60C8.01588 46.2136 13.4995 32.9964 23.248 23.248C32.9964 13.4995 46.2136 8.01588 60 8ZM92 208H60C46.2136 207.984 32.9964 202.5 23.248 192.752C13.4995 183.004 8.01588 169.786 8 156V96H144V156C143.984 169.786 138.5 183.004 128.752 192.752C119.004 202.5 105.786 207.984 92 208Z"
						fill="black"
					/>
				</svg>
			</SVGButton>
			<Button variant="active">Button</Button>
		</div>
	)
}

export default App
