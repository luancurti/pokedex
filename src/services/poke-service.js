
import { http } from './http'

export async function fetchPokemons () {
  const response = await http.get(``)
  return response.data.results
}
