
import * as types from '../actions/types';

const initialState = {
  currentGroup: 1,
};

export function groupList(state = initialState, action) {
  switch(action.type) {
    case types.CURRENT_GROUP:
        return { ...state, currentGroup: +action.data.key};
    default:
      return {...state};
  }
};