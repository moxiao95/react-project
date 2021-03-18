// 依赖
import { Component } from 'react';
import { Link } from 'react-router-dom';

// 组件
import Nav from '../../components/Nav/Nav';

export default class Help extends Component {
    render() {
        return (
            <div>
                {/* 导航 */}
                <Nav activeIndex="4" />
                帮助
            </div>
        )
    }
}
