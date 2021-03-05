import React from 'react';
import './Hello.css';

import { connect } from 'react-redux';

import World from '../World/World';



class Hello extends React.Component {
    render() {
        let { info } = this.props;
        return (
            <div className="test">hello{info} <World /></div>
        )
    }
};

const mapStateToProps = (state) => {
    console.log(state);
    return {
        info: state.info,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello);
