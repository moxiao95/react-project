import { createStore } from 'redux';

let setStore = {
    info: 'test',
}

const ReducerName = (state = setStore, action) => {
    switch (action.type) {
        case 'TEST':
            state.info = action.info;
            return {...state};
        default:
            return {...state};
    }
}

export default new createStore(ReducerName);
