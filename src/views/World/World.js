import React from 'react';

import './World.css';

import Test from '../Test/Test';

class World extends React.Component {
    render() {
        return (
            <span id="info">world <Test/></span>
        )
    }
};

export default World;
