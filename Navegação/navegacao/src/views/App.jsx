import Content from '../components/layout/Content';
import Menu from '../components/layout/Menu';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';

export default function App(props) {
	return (
		<div className="App">
			<Router>
				<Menu />
				<Content />
			</Router>
		</div>
	);
}
