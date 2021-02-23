import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Hello from './views/Hello/Hello';

// class Hello extends React.Component {
// 	render() {
// 		return (
// 			<Hello />
// 		)
// 	}
// }

ReactDOM.render(
	<Hello />,
	document.getElementById('root')
);

reportWebVitals();
