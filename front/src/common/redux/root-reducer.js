import { combineReducers } from 'redux';
import { studentsReducer } from './students/students.reducer';
import { login, changePassword } from './auth/auth.reducer';
import { createGroup } from './groups/groups.reducer';
import { teachersReducer } from './teachers/teachers.reducer';
import { setPassword } from './set-password/set.password.reducer';
import { forgotPassword }  from './forgot-password/forgot.password.reducer';
import { groups } from './groups/groups.reducer';

const rootReducer = combineReducers({ login, studentsReducer, groups, teachersReducer, setPassword, changePassword, forgotPassword, createGroup });

export default rootReducer;
