import { SET_CURRENT_GROUP, CREATE_GROUP } from './types';

export const setCurrentGroup = (data) => ({ type: SET_CURRENT_GROUP, data });
export const createGroup = (data) => ({ type: CREATE_GROUP, data });
