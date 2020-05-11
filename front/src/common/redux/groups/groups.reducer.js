import * as types from './types';

const initialState = {
  currentGroup: {},
};

export function groupList(state = initialState, action) {
  switch (action.type) {
    case types.SET_CURRENT_GROUP:
      return { ...state, currentGroup: action.data };
    default:
      return { ...state };
  }
};

const initialStateCreatingGroup = {
    isGroupCreated: false,
    errorMessage: ''
}

export function createGroup(state = initialStateCreatingGroup, action){
    switch(action.type) {
        case types.CREATE_GROUP_SUCCESS:
            return {...state, isGroupCreated: true}
        case types.CREATE_GROUP_ERROR:
            return {...state, errorMessage: 'This group is already existed'}
        default:
            return state;
    }
}