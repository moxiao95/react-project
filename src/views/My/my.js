// 依赖
import { Component } from 'react';

// 组件
import Nav from '../../components/Nav/Nav';

export default class My extends Component {
    // 退出
    goback = () => {
        this.props.history.push('/home');
    }

    render() {
        return (
            <div>
                {/* 导航 */}
                <Nav activeIndex={4} />
                my
                <button onClick={this.goback}>fh</button>
            </div>
        )
    }
}
