import { Component } from 'react';

export default class My extends Component {
    constructor(props) {
        super(props);
        this.goback = this.goback.bind(this);
    }

    goback() {
        this.props.history.push('/home');
    }

    render() {
        return (
            <div>
                my
                <button onClick={this.goback}>fh</button>
            </div>
        )
    }
}
