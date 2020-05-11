import {UPDATE_USER_PROFILE, SHOW_MODAL_UPDATE_PROFILE, HIDE_MODAL_UPDATE_PROFILE} from './types';

export const updateUserProfileAction = (user) => ({
    type: UPDATE_USER_PROFILE,
    user
});

export const hideModalUpdateProfile = () => ({ 
    type: HIDE_MODAL_UPDATE_PROFILE 
});

export const showModalUpdateProfile = () => ({ 
    type: SHOW_MODAL_UPDATE_PROFILE 
});