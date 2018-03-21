import { http } from './http'

export const getPokemons = async () => {
  const response = await http.get(``)
  return response.data.results
}
