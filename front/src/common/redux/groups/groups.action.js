import { SET_CURRENT_GROUP, CREATE_GROUP } from './types';

export const setCurrentGroup = (data) => {
  return {
    type: SET_CURRENT_GROUP,
    data
  }
};

export const createGroup = (data) => {
  return {
    type: CREATE_GROUP,
    data
  }
};
