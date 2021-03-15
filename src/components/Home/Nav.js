import { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import './Nav.scss';

class Nav extends Component {
    state = {
        childrenListShow: false,
    }

    showChildrenList = () => {
        this.setState({
            childrenListShow: true,
        });
    }

    hideChildrenList = () => {
        this.setState({
            childrenListShow: false,
        });
    }

    logout = () => {
        console.log(this);
        this.props.history.push('/login');
    }

    render() {
        let { childrenListShow } = this.state;
        let { activeIndex } = this.props;
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
                <div className="page-logo"></div>
                <ul className="page-link">
                    {
                        navList.map((e, i) => {
                            return (
                                <li key={i} className={activeIndex == e.navIndex ? 'active-link' : ''}>
                                    <Link to={e.path}>{e.title}</Link>
                                </li>
                            )
                        })
                    }
                    <li
                        className="active-none"
                        onMouseEnter={this.showChildrenList}
                    >
                        <span className="my-title">我的</span>
                        <div
                            className="my-list"
                            style={{display: childrenListShow ? 'block' : 'none'}}
                            onMouseLeave={this.hideChildrenList}
                        >
                            <div>个人中心</div>
                            <div>修改密码</div>
                            <div onClick={this.logout}>退出登录</div>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}

export default withRouter(Nav);
