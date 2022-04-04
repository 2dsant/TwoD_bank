import { Types } from './types'
import { apiCep } from '../services/Cep/apiCep'

export const getAdress = async (cep) => {
  const { data } = await apiCep.get(`${apiCep.defaults.baseURL}/${cep}/json/`)
  return {
    type: Types.GET_ADDRESS,
    address: data
  }
}