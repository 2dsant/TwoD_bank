import { Types } from '../actions/types';

const INITIAL_STATE = {
  data: {},
  errorsData: []
}

export const userDataReducer = (state = INITIAL_STATE, action) => {
  if (action.type === Types.GET_USER_DATA) {
    return {
      ...state,
      data: action.userData,
      errorsData: action.errors
    }
  }

  return state;
}

