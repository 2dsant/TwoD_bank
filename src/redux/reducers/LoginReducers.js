import { Types } from '../actions/types';

const INITIAL_STATE = {
  user: {},
  userSaved: false,
  forgotPass: false,
  errorsLogin: []
}

export const loginReducer = (state = INITIAL_STATE, action) => {
  if (action.type === Types.LOGIN_DO_LOGIN) {
    return {
      ...state,
      user: action.user,
      userSaved: true,
      errorsLogin: action.errors
    }
  }

  if (action.type === Types.LOGOUT_DO_LOGIN) {
    return {
      ...state,
      user: action.user,
      userSaved: false,
      errorsLogin: []
    }
  }

  return state;
}