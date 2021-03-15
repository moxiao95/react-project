import { Component } from 'react';
import { Link } from 'react-router-dom';

import './Home.scss';

import Nav from '../../components/Home/Nav';

export default class Home extends Component {
    state = {

    }
    
    goLogin = () => {
        this.props.history.push('/login');
    }

    render() {
        return (
            <div className="home-page">
                <Nav activeIndex="1" />
                <div className="home-content">
                    Home
                    <Link to="/my">我的</Link>
                    <button onClick={this.goLogin}>返回</button>
                </div>
            </div>
        )
    }
}
