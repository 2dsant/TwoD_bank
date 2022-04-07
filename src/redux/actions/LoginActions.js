import { Types } from './types';

export const login_do_login = (user) => {
  if (user?.username) {
    return {
      type: Types.LOGIN_DO_LOGIN,
      user: user,
      errors: []
    }
  }

  return {
    type: Types.LOGIN_DO_LOGIN,
    user: {},
    errors: [
      'Confira o email e senha digitado.'
    ]
  }
}

export const login_do_logout = () => {
  return {
    type: Types.LOGOUT_DO_LOGIN,
    user: {}
  }
}
