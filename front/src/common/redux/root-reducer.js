import { combineReducers } from 'redux';
import { studentsReducer } from './students/students.reducer'; 
import { login } from './auth/auth.reducer';

const rootReducer = combineReducers({ login, studentsReducer });

export default rootReducer;
