import { combineReducers } from 'redux';
import { studentsReducer } from './students/students.reducer';
import { login } from './auth/auth.reducer';
import { groupList } from './groups/groups.reducer';

const rootReducer = combineReducers({ login, studentsReducer, groupList });

export default rootReducer;
