import React from 'react';
import './Hello.css';

import World from '../World/World';


class Hello extends React.Component {
    render() {
        return (
            <div class="test">hello <World /></div>
        )
    }
};

export default Hello;