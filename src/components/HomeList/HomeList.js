import { Component } from 'react';

import './HomeList.scss';

export default class HomeList extends Component {
    state = {
        mainList: [
            {
                title: '选择课题',
                info: '选择课题',
            },
            {
                title: '开题',
                info: '开题',
            },
            {
                title: '初稿',
                info: '初稿',
            },
            {
                title: '终稿',
                info: '终稿',
            },
            {
                title: '查重',
                info: '查重',
            },
            {
                title: '完结',
                info: '完结',
            },
            {
                title: '答辩',
                info: '答辩',
            },
            {
                title: '答辩结果',
                info: '答辩结果',
            },
        ],
    }

    render() {
        let { mainList } = this.state;
        return (
            <ul className="content-list">
                {
                    mainList.map((e, i) => {
                        return (
                            <li key={i}>
                                <span>{e.title}</span>
                                <p>{e.info}</p>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
}
