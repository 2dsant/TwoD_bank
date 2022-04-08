import { login_do_login } from '../actions/LoginActions';
import { get_user_data } from '../actions/UserDataActions';
import { api } from '../services/api';

const getUserThunk = (username, password) => (dispatch) => {
  api.post('/usuario/auth', {
    username: username,
    senha: password
  }).then(({ data }) => {
    if (!data?.error) {
      const user = {
        username,
        password
      }
      api.defaults.headers.common['Authorization'] = `Bearer ${data.data.token}`;
      dispatch(login_do_login(user))
    }
  }).catch((error) => {
    dispatch(login_do_login(error.response.request._response))
    dispatch(login_do_login(error))
  });
}

const getUserDataThunk = () => (dispatch) => {
  api.get('/dados-conta').then(({ data }) => {
    if (!(data.error || data.hasError)) {
      dispatch(get_user_data(data.data))
    }
  }).catch((error) => {
    console.log(error.response.request._response)
  });
}

export { getUserThunk, getUserDataThunk }