// 引入依赖
import { Component } from 'react';

// 引入scss文件
import './UserInput.scss';

// 引入element
import { Input } from 'element-react';

export default class UserInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: '',
            userShow: false,
        }
        this.getUserInput = this.getUserInput.bind(this);
    }

    getUserInput(e) {
        let val = e.trim(),
            bl = false,
            reg = /^1\d{10}/;
        if (val == '' || !reg.test(val)) {
            bl = false;
        } else {
            bl = true;
        }
        this.setState({
            userShow: bl,
            user: val,
        });
        this.props.changeUser(e);
    }

    render() {

        let { user, userShow } = this.state;

        let userPointOut = <div>请输入正确的账号</div>;
        if (userShow) {
            userPointOut = <div></div>
        }

        return (
            <div className="login-user">
                <Input
                    className="login-user-input"
                    placeholder="请输入账号"
                    value={user}
                    onChange={this.getUserInput}
                    maxLength={11}
                />
                { userPointOut }
            </div>
        );
    }
}