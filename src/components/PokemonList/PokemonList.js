import React, { Component } from 'react'

import { fetchPokemons } from '../../services/poke-service'
import './index.css'

import Pokemon from '../Pokemon/Pokemon'

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
      <section className='poke-list'>
        {pokemons.map(
          (pokemon, index) => (
            <Pokemon pokemon={pokemon} key={index} />
          )
        )}
      </section>
    )
  }
}

export default PokemonList
