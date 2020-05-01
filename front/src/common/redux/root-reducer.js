import { combineReducers } from 'redux';
import { login } from './auth/reducers/auth.reducer';

const rootReducer = combineReducers({ login });

export default rootReducer;