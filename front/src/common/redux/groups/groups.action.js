import { CURRENT_GROUP } from './types';

export const setCurrentGroup = (data) => {
  return {
    type: CURRENT_GROUP,
    data
  }
};
