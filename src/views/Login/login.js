// 引入依赖
import { Component } from 'react';

// 引入scss文件
import './login.scss';

// 引入element
import { Input, Button, Message } from 'element-react';

// 导出登录模块
export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: '',
            password: '',
        }
        this.changeUser = this.changeUser.bind(this);
        this.changePassword = this.changePassword.bind(this);
        this.login = this.login.bind(this);
    }

    // 修改账号
    changeUser(e) {
        this.setState({
            user: e.trim(),
        });
    }

    // 修改密码
    changePassword(e) {
        this.setState({
            password: e,
        });
    }

    //点击登录 
    login() {
        if (this.state.user === '' ) {
            Message('账号不能为空！');
            this.setState({
                password: '',
            });
            return;
        } else if (this.state.password === '') {
            Message('密码不能为空！');
            return;
        } else if (!/^1\d{10}/.test(this.state.user)) {
            Message('请输入正确的账号！');
            return;
        } else if (this.state.password.length < 8) {
            Message('密码最少为8位！');
            this.setState({
                password: '',
            });
            return;
        }
        this.props.history.push('/home');
    }

    render() {
        let { user, password } = this.state;

        return (
            <div className="page-login">
                <section className="login-box">
                    <div className="login-box-content">
                        <header className="login-box-head">论文系统</header>
                        <div className="login-user">
                            <Input
                                className="login-user-input"
                                placeholder="请输入账号"
                                value={user}
                                onChange={this.changeUser}
                                maxLength={11}
                            />
                        </div>
                        <div className="login-password">
                            <Input
                                placeholder="请输入密码"
                                value={password}
                                type="password"
                                onChange={this.changePassword}
                                maxLength={16}
                            />
                        </div>
                        <Button className="login-btn" type="primary" onClick={this.login}>登录</Button>
                    </div>
                </section>
            </div>
        )
    }
}
