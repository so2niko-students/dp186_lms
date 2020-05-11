import { combineReducers } from 'redux';
import { studentsReducer } from './students/students.reducer';
import { login, changePassword } from './auth/auth.reducer';
import { groups } from './groups/groups.reducer';
import { updateUserProfile } from './update-profile/update.profile.reducer';
import { teachersReducer } from './teachers/teachers.reducer';
import { setPassword } from './set-password/set.password.reducer';
import { forgotPassword }  from './forgot-password/forgot.password.reducer';

const rootReducer = combineReducers({ login, studentsReducer, groups, teachersReducer, setPassword, changePassword, forgotPassword,  updateUserProfile });

export default rootReducer;
