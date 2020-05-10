import {CREATE_GROUP, IS_GROUP_EXIST} from './types';

export const createGroupAction = (group) => ({type: CREATE_GROUP, group});
export const checkExistGroupAction = (group) => ({type: IS_GROUP_EXIST, group});