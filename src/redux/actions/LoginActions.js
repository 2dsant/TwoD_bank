import { Types } from './types'
import users from '../../database/users';

export const login = (username, password) => {
  return {
    type: Types.LOGIN_DO_LOGIN,
    user: users.find(item => item.email === username && item.password === password)
  }
}