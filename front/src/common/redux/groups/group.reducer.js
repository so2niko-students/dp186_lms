import {CREATE_GROUP, IS_GROUP_EXIST} from './types';

const initialState = {
    isGroupExisted: false
}

export function createGroupReducer(state = initialState, action){
    switch(action.type) {
        case IS_GROUP_EXIST:
            return {...state, isGroupExisted: true}
        case CREATE_GROUP:
            return {...state, isGroupExisted: false}
        default:
            return state;
    }
}