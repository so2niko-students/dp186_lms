import * as types from './types';

const initialState = {
    isUpdateProfileModalVisible: false,
    user: JSON.parse(localStorage.getItem('user')),
    redirectTo: ''
}

export function updateUserProfile (state = initialState, action) {
    switch(action.type) {
        case types.SHOW_MODAL_UPDATE_PROFILE:
            return { ...state, isUpdateProfileModalVisible: true};
        case types.HIDE_MODAL_UPDATE_PROFILE:
            return { ...state, isUpdateProfileModalVisible: false};
        case types.REDIRECT_AFTER_UPDATE:
            return { ...state, redirectTo: action.payload}
        default:
            return state;
    }
}