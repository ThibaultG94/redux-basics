import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/index.scss';

// redux
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { getPosts } from './actions/post.action';
import { getUser } from './actions/user.action';

const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(thunk))
);

store.dispatch(getPosts());
store.dispatch(getUser());

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,

	document.getElementById('root')
);
