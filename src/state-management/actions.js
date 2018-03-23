import axios from 'axios'

import * as actionsTypes from './actionsTypes'

const baseUrl = `https://pokeapi.co/api/v2/pokemon/`

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
  return function (dispatch) {
    return axios.get(`${baseUrl}${pokemonId}`)
      .then(response => {
        const pokemon = response.data
        dispatch(loadPokemonSuccess(pokemon))
      })
  }
}

export function loadPokemons () {
  return function (dispatch) {
    return axios.get(baseUrl)
      .then(response => {
        const pokemons = response.data.results
        dispatch(loadPokemonsSuccess(pokemons))
      })
  }
}
