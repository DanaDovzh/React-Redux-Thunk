import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { rootReducerTweets } from './reducer/reducerTweets';
import { rootReducerUser } from './reducer/reducerUser';

const reducers = combineReducers({
  rootReducerTweets,
  rootReducerUser,
});

const store = createStore(reducers, compose(applyMiddleware(thunk)));

export default store;