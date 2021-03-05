import React, { Component } from 'react';

import { HashRouter as Router, Link, Route } from 'react-router-dom';

import Hello from '../views/Hello/Hello';

const Home = () => (
    <div>
		<h2>Home</h2>
	</div>
);

const About = () => (
    <div>
		<h2>About</h2>
	</div>
);

const Product = () => (
    <div>
		<h2>Product</h2>
	</div>
);

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Link to="/">Home</Link>
                    <Link to="/About">About</Link>
                    <Link to="/Product">Product</Link>
                    <Link to="/Hello">Hello</Link>
                    <hr />
                    <Route path="/" exact component={ Home }></Route>
                    <Route path="/about" component={ About }></Route>
                    <Route path="/product" component={ Product }></Route>
                    <Route path="/hello" component={ Hello }></Route>
                </div>
            </Router>
        );
    }
}

export default App;