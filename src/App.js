import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import FormAddUser from './components/AddUsers/FormAddUser';
import FormAddTweet from './components/AddTweet/FormAddTweet';
import NavPage from './components/Nav/Nav';
import UsersPage from './components/Users/UsersPage';
import TweetsPage from './components/Tweets/TweetsPage';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

function App() {
  return (
    <Router>
      <NavPage />
      <Switch>
        <Route path='/users-page' component={UsersPage} />
        <Route path='/add-user' component={FormAddUser} />
        <Route path='/tweets-page' component={TweetsPage} />
        <Route path='/tweet-user' component={FormAddTweet} />
      </Switch>
    </Router>
  );
}

export default App;
