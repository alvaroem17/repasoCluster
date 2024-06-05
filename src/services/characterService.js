import { api } from './config'

export const getAllCharacters = async () => {
  try {
    const { data } = await api.get('character')
    return  data.results
  } catch (error) {
    console.error(error)
  }
}