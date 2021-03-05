import React, { Component } from 'react';
import { HashRouter as Router, Link, Route } from 'react-router-dom';

const Home = () => (
    <div>
		<h2>Home</h2>
	</div>
);

class App extends Component {
    render() {
        return (
            <Router>
                <Route path="/" component={ Home } />
            </Router>
        );
    }
}

export default App;
