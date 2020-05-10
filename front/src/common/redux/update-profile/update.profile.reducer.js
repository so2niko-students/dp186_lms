import * as types from './types';

const initialState = {
    isUpdatedProfile: false,
    errorMessage: ''
}

export function updateUserProfile (state = initialState, action) {
    switch(action.type) {
        case types.UPDATE_USER_PROFILE_SUCCESS:
            return {...state, isUpdatedProfile: true};
        case types.UPDATE_USER_PROFILE_ERROR:
            return {...state, errorMessage: 'Profile update is failed'};
        default:
            return state;
    }
}