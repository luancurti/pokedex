import * as actionsTypes from './actionsTypes'

const initialState = {
  pokemon: {},
  pokemons: []
}

export default function pokedexReducer (state = initialState, action) {
  switch (action.type) {
    case actionsTypes.LOAD_POKEMONS:
      return {
        ...state,
        ...action.payload
      }
    case actionsTypes.LOAD_POKEMON:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}
