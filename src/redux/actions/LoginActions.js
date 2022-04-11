import { Types } from './types';

export const login_do_login = (user) => {
  if (user.username) {
    return {
      type: Types.LOGIN_DO_LOGIN,
      user: user,
      hasError: false,
      error: ''
    }
  } else {
    const result = JSON.parse(user)
    const { error } = result;

    return {
      type: Types.LOGIN_DO_LOGIN,
      user: {},
      hasError: true,
      error: error
    }
  }
}

export const login_do_logout = () => {
  return {
    type: Types.LOGOUT_DO_LOGIN,
    user: {}
  }
}
