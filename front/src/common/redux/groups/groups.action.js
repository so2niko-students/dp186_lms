import { SET_CURRENT_GROUP, CHANGE_UPDATING_STATUS_CURRENT_GROUP, UPDATE_CURRENT_GROUP, LOAD_GROUPS_DATA,
  START_LOAD_CURRENT_GROUP_DATA, DELETE_STUDENT_FROM_GROUP } from './types';

export const setCurrentGroup = (data) => {
  return {
    type: SET_CURRENT_GROUP,
    data
  }
};

export const updateCurrentGroup = (data) => {
  return {
    type: UPDATE_CURRENT_GROUP,
    data
  }
}

export const startUpdatingGroupData = (data) => {
  return {
    type: START_LOAD_CURRENT_GROUP_DATA,
  }
}

export const loadGroupsData = (data) => {
  return {
    type: LOAD_GROUPS_DATA,
  }
}

export const changeUpdatingStatus = (data) => {
  return {
    type: CHANGE_UPDATING_STATUS_CURRENT_GROUP,
  }
}

export const deleteStudentFromGroup = (data) => {
  return {
    type: DELETE_STUDENT_FROM_GROUP,
    data,
  }
}
