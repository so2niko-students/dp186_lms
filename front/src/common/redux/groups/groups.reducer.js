import * as types from './types';
import { updateGroupInGroupList } from './groups.selectors';

const initialState = {
    groupList: null,
    currentGroup: {},
    isGroupEdited: false,
    isUpdating: false,
    groupsError: false,
    isDeleting: false,
};

export function groups(state = initialState, action) {
    switch (action.type) {
        case types.CHANGE_UPDATING_STATUS_CURRENT_GROUP:
            return {...state, isGroupEdited: !state.isGroupEdited};
        case types.START_LOAD_CURRENT_GROUP_DATA:
            return { ...state, groupsLoadingError: false, isUpdating: true };
        case types.SET_GROUPS_DATA:
            return { ...state, groupList: action.data, currentGroup: action.data[0] };
        case types.SET_CURRENT_GROUP:
            return { ...state, currentGroup: state.groupList[action.data] };
        case types.SET_UPDATED_CURRENT_GROUP:
            const updatedGroupList = updateGroupInGroupList(state.groupList, action.data);
            return { ...state, groupList: [...updatedGroupList], currentGroup: action.data, isUpdating: false, isGroupEdited: false};
        case types.DELETE_STUDENT_FROM_GROUP:
            return { ...state, isDeleting: true };
        case types.COMPLETE_DELETE_STUDENT:
            return { ...state, currentGroup: { ...action.data }, isDeleting: false };
        case types.ERROR_UPDATE_CURRENT_GROUP:
            return { ...state, groupsError: action.data, isUpdating: false, isGroupEdited: false };
        case types.ERROR_DELETE_STUDENT:
            return { ...state, groupsError: action.data };
        case types.ERROR_LOADING_GROUPS_DATA:
            return { ...state, groupsError: action.data };
        default:
            return { ...state };
    }
};
