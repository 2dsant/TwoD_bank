import { Types } from '../actions/types';

const INITIAL_STATE = {
  loading: false
}

export const appReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.APP_SHOW_LOADING:
      return {
        loading: true
      }
    case Types.APP_HIDE_LOADING:
      return {
        loading: false
      }
    default:
      return state;
  }
}