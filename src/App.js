import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import FormAddUser from './components/AddUsers/FormAddUser';
import FormAddTweet from './components/AddTweet/FormAddTweet';
import NavPage from './components/Nav/Nav';
import UsersPage from './components/Users/UsersPage';
import TweetsPage from './components/Tweets/TweetsPage';
import { AppRouters } from './components/Nav/AppRouters';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

function App() {
	return (
		<Router>
			<NavPage />
			<Switch>
				<Route path={AppRouters.userPage} component={UsersPage} />
				<Route path={AppRouters.addUser} component={FormAddUser} />
				<Route path={AppRouters.tweetsPage} component={TweetsPage} />
				<Route path={AppRouters.tweetUser} component={FormAddTweet} />
			</Switch>
		</Router>
	);
}

export default App;
