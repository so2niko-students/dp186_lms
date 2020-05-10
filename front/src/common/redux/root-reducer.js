import { combineReducers } from 'redux';
import { studentsReducer } from './students/students.reducer';
import { login } from './auth/auth.reducer';
import { groupList } from './groups/groups.reducer';
import { teachersReducer } from './teachers/teachers.reducer'; 

const rootReducer = combineReducers({ login, studentsReducer, groupList, teachersReducer });

export default rootReducer;
