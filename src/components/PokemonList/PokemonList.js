import React, { Component } from 'react'

import { getPokemons } from '../../services/poke-service'
import { pokeClasses } from '../../pokeClasses'
import './index.scss'

import Pokemon from '../Pokemon/Pokemon'

class PokemonList extends Component {
  constructor () {
    super()
    this.state = {
      pokemons: []
    }
  }

  async componentDidMount () {
    const pokemons = await getPokemons()
    this.setState({ pokemons })
  }

  render () {
    const { pokemons } = this.state

    return (
      <section className='poke-list'>
        <div className='poke-list__container'>
          {pokemons.map(
            (pokemon, index) => (
              <Pokemon
                pokemon={pokemon}
                key={index}
                pokeClass={pokeClasses[index]} />
            )
          )}
        </div>
      </section>
    )
  }
}

export default PokemonList
