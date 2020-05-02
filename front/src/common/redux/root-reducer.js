import { combineReducers } from 'redux';
import { studentsReducer } from './students/students.reducer';
import { teachersReducer } from './teachers/teachers.reducer'; 

const rootReducer = combineReducers({studentsReducer, teachersReducer});

export default rootReducer;
