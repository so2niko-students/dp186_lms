import { SET_CURRENT_GROUP, CHANGE_UPDATING_STATUS_CURRENT_GROUP, UPDATE_CURRENT_GROUP, LOAD_GROUPS_DATA,
  START_LOAD_CURRENT_GROUP_DATA, DELETE_STUDENT_FROM_GROUP } from './types';

export const setCurrentGroup = (data) => ({
    type: SET_CURRENT_GROUP,
    payload: data,
});

export const updateCurrentGroup = (data) => ({
    type: UPDATE_CURRENT_GROUP,
    payload: data,
});

export const startUpdatingGroupData = () => ({
    type: START_LOAD_CURRENT_GROUP_DATA,
});

export const loadGroupsData = () => ({
    type: LOAD_GROUPS_DATA,
});

export const changeUpdatingStatus = () => ({
    type: CHANGE_UPDATING_STATUS_CURRENT_GROUP,
});

export const deleteStudentFromGroup = (data) => ({
    type: DELETE_STUDENT_FROM_GROUP,
    payload: data,
});
