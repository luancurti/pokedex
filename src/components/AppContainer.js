import React, { Component } from 'react'

import { fetchPokemons } from '../services/poke-service'

class AppContainer extends Component {
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
          {pokemons.map((pokemon, index) => <li key={index}>{pokemon.name}</li>)}
        </ul>
      </div>
    )
  }
}

export default AppContainer
