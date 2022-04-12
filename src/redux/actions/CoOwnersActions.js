import { Types } from './types';

export const get_co_owners = (data) => {
  if (data[0]?.nome) {
    return {
      type: Types.GET_CO_OWNERS,
      coOwners: data,
      errors: []
    }
  }

  return {
    type: Types.GET_CO_OWNERS,
    coOwners: [],
    errors: [
      'Não foram encontrados co-titulares para esse cliente.'
    ]
  }
}
