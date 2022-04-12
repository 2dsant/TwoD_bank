import { Types } from '../actions/types';

const INITIAL_STATE = {
  coOwners: [],
  errorsData: []
}

export const coOwnersReducer = (state = INITIAL_STATE, action) => {
  if (action.type === Types.GET_CO_OWNERS) {
    return {
      ...state,
      coOwners: action.coOwners,
      errorsData: action.errors
    }
  }

  return state;
}

