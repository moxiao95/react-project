// 依赖
import { Component } from 'react';
import { Link } from 'react-router-dom';

// 组件
import Nav from '../../components/Nav/Nav';

export default class Notice extends Component {
    render() {
        return (
            <div>
                {/* 导航 */}
                <Nav activeIndex="2" />
                公告
            </div>
        )
    }
}
