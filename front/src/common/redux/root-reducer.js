import { combineReducers } from 'redux';
import { studentsReducer } from './students/students.reducer';
import { login } from './auth/auth.reducer';
import { groupList } from './groups/groups.reducer';
import { updateUserProfile } from './update-profile/update.profile.reducer';

const rootReducer = combineReducers({ login, studentsReducer, groupList, updateUserProfile });

export default rootReducer;
