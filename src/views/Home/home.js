// 依赖
import { Component } from 'react';
import { Link } from 'react-router-dom';

// 样式
import './Home.scss';

// 组件
import Nav from '../../components/Nav/Nav';
import HomeList from '../../components/HomeList/HomeList';

export default class Home extends Component {
    // 退出
    goLogin = () => {
        this.props.history.push('/login');
    }

    render() {
        return (
            <div className="home-page">
                {/* 导航 */}
                <Nav activeIndex="1" />
                <div className="home-content">
                    {/* 主页列表 */}
                    <HomeList />
                    <Link to="/my">我的</Link>
                    <button onClick={this.goLogin}>返回</button>
                </div>
            </div>
        )
    }
}
