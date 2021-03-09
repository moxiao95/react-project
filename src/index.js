// 引入依赖
import React, { component } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

// 引入redux
import { Provider } from 'react-redux';
import store from './store/index';

// 引入router
import { BrowserRouter } from 'react-router-dom';
import App from './router/RouterView';

// 引入element默认样式
import 'element-theme-default';

// 渲染
ReactDOM.render(
	<BrowserRouter>
		<Provider store={store}>
			<App />
		</Provider>
	</BrowserRouter>,
	document.getElementById('root'),
);
