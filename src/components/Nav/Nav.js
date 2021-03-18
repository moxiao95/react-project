// 依赖
import { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

// 样式
import './Nav.scss';

class Nav extends Component {
    // 数据
    state = {
        childrenListShow: false,
    }

    // 展示我的下的选项列表
    showChildrenList = () => {
        // 清除定时器
        if (this.timer) {
            clearTimeout(this.timer);
            this.timer = null;
        }
        this.setState({
            childrenListShow: true,
        });
    }

    // 关闭我的下的选项列表
    hideChildrenList = () => {
        this.timer = setTimeout(() => {
            this.setState({
                childrenListShow: false,
            });
        }, 400);
    }

    // 到 '我的'
    toPersonal = () => {
        this.props.history.push('/personal');
    }

    // 到 '修改密码'
    toEdit = () => {
        this.props.history.push('/edit');
    }

    // 退出
    logout = () => {
        this.props.history.push('/login');
    }

    render() {
        let { childrenListShow } = this.state;
        let { activeIndex } = this.props;
        // 定义导航数据
        let navList = [
            {
                title: '首页',
                path: '/home',
                navIndex: '1',
            },
            {
                title: '通知公告',
                path: '/notice',
                navIndex: '2',
            },
            {
                title: '论文资料',
                path: '/data',
                navIndex: '3',
            },
            {
                title: '帮助',
                path: '/help',
                navIndex: '4',
            },
        ];

        return (
            <div className="nav-page">
                <div className="page-logo">论文提交系统</div>
                <ul className="page-link">
                    {/* 导航按钮导航生成 */}
                    {
                        navList.map((e, i) => {
                            return (
                                <li key={i} className={activeIndex == e.navIndex ? 'active-link' : ''}>
                                    <Link to={e.path}>{e.title}</Link>
                                </li>
                            )
                        })
                    }
                    {/* '我的' 功能按钮 */}
                    <li
                        className="active-none"
                        onMouseEnter={this.showChildrenList}
                        onMouseLeave={this.hideChildrenList}
                    >
                        <span className="my-title">我的</span>
                        <div
                            className="my-list"
                            style={{display: childrenListShow ? 'block' : 'none'}}
                            onMouseEnter={this.showChildrenList}
                            onMouseLeave={this.hideChildrenList}
                        >
                            <div onClick={this.toPersonal}>个人中心</div>
                            <div onClick={this.toEdit}>修改密码</div>
                            <div onClick={this.logout}>退出登录</div>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}

export default withRouter(Nav);
