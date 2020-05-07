import { SET_CURRENT_GROUP, CHANGE_UPDATING_STATUS_CURRENT_GROUP, WATCH_CURRENT_GROUP } from './types';

export const setCurrentGroup = (data) => {
  return {
    type: SET_CURRENT_GROUP,
    data
  }
};

export const updateCurrentGroup = (data) => {
  return {
    type: WATCH_CURRENT_GROUP,
    data
  }
}

export const changeUpdatingStatus = (data) => {
  return {
    type: CHANGE_UPDATING_STATUS_CURRENT_GROUP,
  }
}