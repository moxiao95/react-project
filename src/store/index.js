// 依赖
import { createStore } from 'redux';

// 定义redux数据
let setStore = {
    info: 'test',
}

// 方法
const ReducerName = (state = setStore, action) => {
    switch (action.type) {
        case 'TEST':
            state.info = action.info;
            return {...state};
        default:
            return {...state};
    }
}

// 导出redux
export default new createStore(ReducerName);
