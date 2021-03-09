// 引入依赖
import { Component } from 'react';

// 引入scss文件
import './login.scss';

// 引入element
import { Input, Button, Notification } from 'element-react';

// 引入组件
import UserInput from '../../components/Login/UserInput';


// 导出登录模块
export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: '',
            password: '',
            userShow: false,
            passwordShow: false,
        }
        this.changeUser = this.changeUser.bind(this);
        this.changepassword = this.changepassword.bind(this);
        this.login = this.login.bind(this);
    }

    // 修改账号
    changeUser(e) {
        this.setState({
            user: e,
        });
    }

    // 修改密码
    changepassword(e) {
        this.setState({
            password: e,
        });
    }

    //点击登录 
    login() {
        if (this.state.user === '' || this.state.password === '') {
            this.setState({
                userShow: !this.state.userShow,
                passwordShow: !this.state.passwordShow,
            });
        }
        // this.props.history.push('/home');
    }

    render() {
        let { passwordShow } = this.state;

        let passwordPointOut = <div>请输入正确的密码</div>;
        if (!passwordShow) {
            passwordPointOut = <div>-</div>;
        }

        return (
            <div className="page-login">
                <UserInput changeUser={this.changeUser} />
                <Input placeholder="请输入密码" onChange={this.changepassword}/>
                { passwordPointOut }
                <Button type="primary" onClick={this.login}>登录</Button>
            </div>
        )
    }
}
