import * as types from './types';

const initialState = {
  currentGroup: {},
  isGroupEdited: false,
};

export function groupList(state = initialState, action) {
  switch (action.type) {
    case types.SET_CURRENT_GROUP:
      return { ...state, currentGroup: action.data };
    case types.CHANGE_UPDATING_STATUS_CURRENT_GROUP:
      return {...state, isGroupEdited: !state.isGroupEdited}
    default:
      return { ...state };
  }
};
