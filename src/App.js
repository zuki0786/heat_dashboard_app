import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import view from './views/view';

function App() {
	return (
		<>
			<BrowserRouter>
				<Switch>
					<Route path='/' exact component={view} />
				</Switch>
			</BrowserRouter>
		</>
	);
}

export default App;
