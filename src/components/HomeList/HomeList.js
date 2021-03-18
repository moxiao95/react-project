// 依赖
import { Component } from 'react';

// 样式
import './HomeList.scss';

export default class HomeList extends Component {
    // 数据
    state = {
        mainList: [
            {
                title: '选择课题',
                info: '选择课题',
                triggerEvent: 'selectTask',
            },
            {
                title: '开题',
                info: '开题',
                triggerEvent: 'proposal',
            },
            {
                title: '初稿',
                info: '初稿',
                triggerEvent: 'firstDraft',
            },
            {
                title: '终稿',
                info: '终稿',
                triggerEvent: 'lastDraft',
            },
            {
                title: '查重',
                info: '查重',
                triggerEvent: 'duplicateChecking',
            },
            {
                title: '完结',
                info: '完结',
                triggerEvent: 'end',
            },
            {
                title: '答辩',
                info: '答辩',
                triggerEvent: 'makeOpenReply',
            },
            {
                title: '答辩结果',
                info: '答辩结果',
                triggerEvent: 'replyResults',
            },
        ],
    }

    // 选择课题
    selectTask = () => {
        console.log('选择课题');
    }

    // 开题
    proposal = () => {
        console.log('开题');
    }

    // 初稿
    firstDraft = () => {
        console.log('初稿');
    }

    // 终稿
    lastDraft = () => {
        console.log('终稿');
    }

    // 查重
    duplicateChecking = () => {
        console.log('查重');
    }

    // 完结
    end = () => {
        console.log('完结');
    }

    // 答辩
    makeOpenReply = () => {
        console.log('答辩');
    }

    // 答辩结果
    replyResults = () => {
        console.log('答辩结果');
    }


    render() {
        let { mainList } = this.state;
        return (
            <ul className="content-list">
                {/* 列表循环生成 */}
                {
                    mainList.map((e, i) => {
                        return (
                            <li key={i}>
                                <span>{e.title}</span>
                                <p>{e.info}</p>
                                <div onClick={this[e.triggerEvent]}></div>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
}
