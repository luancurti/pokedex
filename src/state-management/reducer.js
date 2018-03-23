import * as actionsTypes from './actionsTypes'

const initialState = {
  pokemon: {},
  pokemons: []
}

const pokedexReducer = (state = initialState, action) => {
  const STATES = {
    [actionsTypes.LOAD_POKEMONS]: {
      ...state,
      ...action.payload
    },
    [actionsTypes.LOAD_POKEMON]: {
      ...state,
      ...action.payload
    }
  }

  const currentState = STATES[action.type]

  if (currentState) {
    return currentState
  }

  return state
}

export default pokedexReducer
