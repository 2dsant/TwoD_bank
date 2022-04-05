import { Types } from './types';
import { apiUser } from '../services/User/apiUser';


export const login_do_login = (user) => {
  console.log('login_do_login', user)
  return {
    type: Types.LOGIN_DO_LOGIN,
    user: user
  }
}

export const login_do_logout = () => {
  return {
    type: Types.LOGOUT,
    user: {}
  }
}
