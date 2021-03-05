import React from 'react';

import { connect } from 'react-redux';

class Test extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         info: props.testName,
    //     }
    //     this.testClick = this.testClick.bind(this);
    // }

    // testClick() {
    //     this.setState({
    //         info: '点击测试',
    //     });
    // }

    render() {

        let { info, test } = this.props;
        console.log(info);
        return (
            <div>
                <button onClick={() => {
                    test('测试看看');
                }}>测试</button>
            </div>
        )
    }
}

// function Test(props) {
//     return (
//         <div>{props.testName}</div>
//     )
// }

const mapStateToProps = state => {
    return {};
}

const mapDispatchToProps = dispatch => {
    return {
        test(i) {
            dispatch({
                type: 'TEST',
                info: i,
            });
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Test);
