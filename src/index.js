import React, { component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { Provider } from 'react-redux';
import store from './store/index';

import { BrowserRouter } from 'react-router-dom';
import App from './router/RouterView';

ReactDOM.render(
	<BrowserRouter>
		<Provider store={store}>
			<App />
		</Provider>
	</BrowserRouter>,
	document.getElementById('root'),
);
