import { Component } from 'react';
import { Link } from 'react-router-dom';

import Nav from '../../components/Home/Nav';

export default class Notice extends Component {
    render() {
        return (
            <div>
                <Nav activeIndex="2" />
                公告
            </div>
        )
    }
}
