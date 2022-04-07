import { Types } from './types';


export const get_user_data = (data) => {
  if (data?.nome) {
    return {
      type: Types.GET_USER_DATA,
      userData: data,
      errors: []
    }
  }

  return {
    type: Types.GET_USER_DATA,
    userData: {},
    errors: [
      'Não foram encontrados dados desse cliente.'
    ]
  }
}
