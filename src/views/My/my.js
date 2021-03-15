import { Component } from 'react';

export default class My extends Component {
    state = {
        
    }

    goback = () => {
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
