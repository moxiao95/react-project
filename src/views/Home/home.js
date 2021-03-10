import { Component } from 'react';
import { Link } from 'react-router-dom';

import './home.scss';

import Test from '../Home/Test/Test';
import About from '../Home/About/About';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.goLogin = this.goLogin.bind(this);
    }

    goLogin() {
        this.props.history.push('/login');
    }

    render() {
        return (
            <div>
                Home
                <Link to="/my">我的</Link>
                <button onClick={this.goLogin}>返回</button>
            </div>
        )
    }
}
