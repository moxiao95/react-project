import { Component } from 'react';
import { Link } from 'react-router-dom';

import Nav from '../../components/Nav/Nav';

export default class Help extends Component {
    render() {
        return (
            <div>
                <Nav activeIndex="4" />
                帮助
            </div>
        )
    }
}
