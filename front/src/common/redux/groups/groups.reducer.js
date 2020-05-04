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
