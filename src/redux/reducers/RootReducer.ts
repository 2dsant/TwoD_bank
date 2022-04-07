import { combineReducers } from "redux";

import { appReducer } from './AppReducers';
import { loginReducer } from './LoginReducers';
import { userDataReducer } from "./UserDataReducer";

const rootReducer = combineReducers({
  appReducer,
  loginReducer,
  userDataReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;