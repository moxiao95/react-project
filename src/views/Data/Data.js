import { Component } from 'react';
import { Link } from 'react-router-dom';

import Nav from '../../components/Nav/Nav';

export default class Notice extends Component {
    render() {
        return (
            <div>
                <Nav activeIndex="3" />
                资料
            </div>
        )
    }
}
