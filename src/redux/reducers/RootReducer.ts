import { combineReducers } from "redux";

import { appReducer } from './AppReducers';
import { coOwnersReducer } from "./CoOwnerReducers";
import { loginReducer } from './LoginReducers';
import { userDataReducer } from "./UserDataReducer";

const rootReducer = combineReducers({
  appReducer,
  loginReducer,
  userDataReducer,
  coOwnersReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;