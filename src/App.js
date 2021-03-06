import { ThemeProvider } from '@material-ui/core/styles';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
// Components
import Navbar from './components/Navbar';
// Pages
import Home from './pages/home';
import Login from './pages/login';
import Signup from './pages/signup';
import AuthRoute from './util/AuthRoute';
import themeFile from './util/theme';

const theme = createMuiTheme(themeFile);

let authenticated = false;
// const token = localStorage.FBIdToken;
// if (token) {
// 	const decodedToken = jwtDecode(token);
// 	if (decodedToken.exp * 1000 < Date.now()) {
// 		window.location.href = '/login';
// 		authenticated = false;
// 	} else authenticated = true;
// }

function App() {
	return (
		<ThemeProvider theme={theme}>
			<div className="App">
				<Router>
					<Navbar />
					<div className="container">
						<Switch>
							<Route exact path="/" component={Home} />
							<AuthRoute exact path="/login" component={Login} authenticated={authenticated} />
							<AuthRoute exact path="/signup" component={Signup} authenticated={authenticated} />
						</Switch>
					</div>
				</Router>
			</div>
		</ThemeProvider>
	);
}

export default App;
