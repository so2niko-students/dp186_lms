import { combineReducers } from 'redux';
import { studentsReducer } from './students/students.reducer'; 

const rootReducer = combineReducers({studentsReducer});

export default rootReducer;
