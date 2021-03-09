import { Component } from 'react';
import { Link } from 'react-router-dom';

import './home.scss'

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.goLogin = this.goLogin.bind(this);
    }

    goLogin() {
        this.props.history.push('/home/test');
    }

    render() {
        console.log(this);
        return (
            <div>
                Home
                <Link to="/home/test">aaaa</Link>
                {/* <button onClick={this.goLogin}>返回</button> */}
            </div>
        )
    }
}
