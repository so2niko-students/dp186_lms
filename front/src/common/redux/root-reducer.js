import { combineReducers } from 'redux';
import { studentsReducer } from './students/students.reducer';
import { login } from './auth/auth.reducer';
import { groups } from './groups/groups.reducer';

const rootReducer = combineReducers({ login, studentsReducer, groups });

export default rootReducer;
