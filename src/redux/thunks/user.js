import { login_do_login } from '../actions/LoginActions';
import { api } from '../services/api';

const getUser = (username, password) => (dispatch) => {
  api.get('/users').then(({ data }) => {
    const user = data.find(item => item.email === username && item.password === password)
    dispatch(login_do_login(user))
  }).catch()
}

export { getUser }