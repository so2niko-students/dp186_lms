import * as types from './types';

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
            return { ...state, groupList: action.payload, currentGroup: action.payload[0] };
        case types.SET_CURRENT_GROUP:
            return { ...state, currentGroup: state.groupList[action.payload], isGroupEdited: false };
        case types.SET_UPDATED_CURRENT_GROUP:
            const group = state.groupList.find((g) => g.id === action.payload.id );
            const groupIndex = state.groupList.indexOf(group);
            const updatedGroupList = [...state.groupList];
            updatedGroupList[groupIndex] = action.payload;
            return { ...state, groupList: updatedGroupList, currentGroup: action.payload, isUpdating: false, isGroupEdited: false};
        case types.DELETE_STUDENT_FROM_GROUP:
            return { ...state, isDeleting: true };
        case types.COMPLETE_DELETE_STUDENT:
            return { ...state, currentGroup: { ...action.payload }, isDeleting: false };
        case types.ERROR_UPDATE_CURRENT_GROUP:
            return { ...state, groupsError: action.payload, isUpdating: false, isGroupEdited: false };
        case types.ERROR_DELETE_STUDENT:
            return { ...state, groupsError: action.payload };
        case types.ERROR_LOADING_GROUPS_DATA:
            return { ...state, groupsError: action.payload };
        default:
            return state;
    }
};

const initialStateCreatingGroup = {
    isCreateGroupModalVisible: false
}

export function createGroup(state = initialStateCreatingGroup, action){
    switch(action.type) {
        case types.CREATE_GROUP_SHOW_MODAL:
            return {...state, isCreateGroupModalVisible: true}
        case types.CREATE_GROUP_HIDE_MODAL:
            return {...state, isCreateGroupModalVisible: false}
        default:
            return state;
    }
}