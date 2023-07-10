import CheckBox from './ui/CheckBox/CheckBox'
import './assets/styles/index.scss'

const App = () => {
	return (
		<div>
			<CheckBox onChange={e => console.log(e.target.checked)} />
		</div>
	)
}

export default App
