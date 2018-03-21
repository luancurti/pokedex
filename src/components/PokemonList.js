import React, { Component } from 'react'

import { fetchPokemons } from '../services/poke-service'

import Pokemon from './Pokemon'

class PokemonList extends Component {
  constructor () {
    super()
    this.state = {
      pokemons: []
    }
  }

  async componentDidMount () {
    const pokemons = await fetchPokemons()
    this.setState({ pokemons })
  }

  render () {
    const { pokemons } = this.state

    return (
      <div className='App'>
        <h1>Lista de Pokemons</h1>
        <ul>
          {pokemons.map(
            (pokemon, index) => (
              <Pokemon pokemon={pokemon} key={index} />
            )
          )}
        </ul>
      </div>
    )
  }
}

export default PokemonList
