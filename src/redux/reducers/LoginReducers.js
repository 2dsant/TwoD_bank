import { Types } from '../actions/types';

const INITIAL_STATE = {
  user: {},
  userSaved: false,
  forgotPass: false,
  hasError: false,
  error: '',
}

export const loginReducer = (state = INITIAL_STATE, action) => {
  if (action.type === Types.LOGIN_DO_LOGIN) {
    return {
      ...state,
      user: action.user,
      userSaved: true,
      errorsLogin: action.error,
      hasError: action.hasError,
      error: action.error,
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