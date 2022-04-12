import { get_co_owners } from '../actions/CoOwnersActions';
import { api } from '../services/api';

const getCoOwnersThunk = () => (dispatch) => {
  api.get('/co-titular').then(({ data }) => {
    if (!(data.error || data.hasError)) {
      dispatch(get_co_owners(data.data.coTitulares))
    }
  }).catch((error) => {
    console.log(error.response.request._response)
  });
}

export { getCoOwnersThunk }