import * as types from './types';

const initialState = {
    isUpdateProfileModalVisible: false,
    isRedirected: false
}

export function updateUserProfile(state = initialState, action) {
    switch (action.type) {
        case types.SHOW_MODAL_UPDATE_PROFILE:
            return { ...state, isUpdateProfileModalVisible: true };
        case types.HIDE_MODAL_UPDATE_PROFILE:
            return { ...state, isUpdateProfileModalVisible: false};
        case types.CHANGE_REDIRECT_STATE:
            return { ...state, isRedirected: true};
        default:
            return state;
    }
}