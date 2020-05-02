import * as types from './types';

const initialState = {
  currentGroup: 1,
};

export function groupList(state = initialState, action) {
  switch (action.type) {
    case types.SET_CURRENT_GROUP:
      return { ...state, currentGroup: +action.data.key };
    default:
      return { ...state };
  }
};
