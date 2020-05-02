import { combineReducers } from 'redux';
import { studentsReducer } from './students/students.reducer';
import { login } from './auth/auth.reducer';
import { teachersReducer } from './teachers/teachers.reducer'; 

const rootReducer = combineReducers({ login, studentsReducer, teachersReducer });

export default rootReducer;
