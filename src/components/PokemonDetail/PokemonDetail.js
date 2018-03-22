import React, { Component, Fragment } from 'react'

import { getPokemonsById } from '../../services/poke-service'

class PokemonDetail extends Component {
  constructor () {
    super()
    this.state = {
      pokemon: {}
    }
  }

  async componentDidMount () {
    const pokemon = await getPokemonsById(1)
    this.setState({ pokemon })
  }

  render () {
    const { pokemon } = this.state

    return (
      <Fragment>
        {!!pokemon && !!pokemon.sprites && !!pokemon.sprites.front_default &&
          <section className='detail-view'>
            <img src={pokemon.sprites.front_default} className='sprite-image' alt='sprite' />
            <div className='data-wrapper'>
              <h1 className='data-name'>ID: {pokemon.id} {name}</h1>
              <p className='data-char'>Tipo: {pokemon.types[0].type.name}</p>
            </div>
          </section>
        }
      </Fragment>
    )
  }
}

export default PokemonDetail
