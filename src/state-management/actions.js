import { getPokemons, getPokemonsById } from '../services/poke-service'

import * as actionsTypes from './actionsTypes'

export function loadPokemonsSuccess (pokemons) {
  return {
    type: actionsTypes.LOAD_POKEMONS,
    payload: {
      pokemons
    }
  }
}

export function loadPokemonSuccess (pokemon) {
  return {
    type: actionsTypes.LOAD_POKEMON,
    payload: {
      pokemon
    }
  }
}

export function loadPokemon (pokemonId) {
  return async function (dispatch) {
    const pokemon = await getPokemonsById(pokemonId)
    dispatch(loadPokemonSuccess(pokemon))
  }
}

export function loadPokemons () {
  return async function (dispatch) {
    const pokemons = await getPokemons()
    dispatch(loadPokemonsSuccess(pokemons))
  }
}
