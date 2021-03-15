import { Component } from 'react';
import { Link } from 'react-router-dom';

import './home.scss';

export default class Home extends Component {
    state = {

    }
    
    goLogin = () => {
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
