import { APP_LOAD, CALC } from "../actions/types";
import { combineReducers } from 'redux';
import { login } from './loginReducer';

const initialState = {
  isLoad: false,
  res: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case APP_LOAD:
      return {
        ...state,
        isLoad: true,
      };
    case CALC:
      const st = { ...state };

      switch (action.sign) {
        case '+': {
          st.res = action.a + action.b;
          break;
        }
      }

      return st;
    default:
      return state;
  }
};

const rootReducer = combineReducers({reducer, login});

export default rootReducer;
