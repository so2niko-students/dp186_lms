import { SET_CURRENT_GROUP } from './types';

export const setCurrentGroup = (data) => {
  return {
    type: SET_CURRENT_GROUP,
    data
  }
};
