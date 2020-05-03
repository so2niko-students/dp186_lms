import { combineReducers } from 'redux';
import { studentsReducer } from './students/students.reducer'; 
import { login } from './auth/auth.reducer';
import { createGroupReducer } from './groups/group.reducer';

const rootReducer = combineReducers({ login, studentsReducer, createGroupReducer});

export default rootReducer;
