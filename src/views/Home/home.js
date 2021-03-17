import { Component } from 'react';
import { Link } from 'react-router-dom';

import './Home.scss';

import Nav from '../../components/Nav/Nav';
import HomeList from '../../components/HomeList/HomeList';

export default class Home extends Component {
    goLogin = () => {
        this.props.history.push('/login');
    }

    render() {
        return (
            <div className="home-page">
                <Nav activeIndex="1" />
                <div className="home-content">
                    <HomeList />
                    <Link to="/my">我的</Link>
                    <button onClick={this.goLogin}>返回</button>
                </div>
            </div>
        )
    }
}
