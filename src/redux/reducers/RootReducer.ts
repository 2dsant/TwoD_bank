import { combineReducers } from "redux";

import { appReducer } from './AppReducers';
import { loginReducer } from './LoginReducers';

const rootReducer = combineReducers({
  appReducer,
  loginReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;