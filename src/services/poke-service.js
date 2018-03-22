import { http } from './http'

export const getPokemons = async () => {
  const response = await http.get(``)
  return response.data.results
}

export const getPokemonsById = async (id) => {
  const response = await http.get(`${id}`)
  return response.data
}
