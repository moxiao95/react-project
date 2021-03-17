import { Component } from 'react';

import Nav from '../../components/Nav/Nav';
export default class My extends Component {
    goback = () => {
        this.props.history.push('/home');
    }

    render() {
        return (
            <div>
                <Nav activeIndex={4} />
                my
                <button onClick={this.goback}>fh</button>
            </div>
        )
    }
}
