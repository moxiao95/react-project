import { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
    render() {
        console.log(this);
        return (
            <div>
                Home
                <Link to="/login">go login</Link>
            </div>
        )
    }
}
