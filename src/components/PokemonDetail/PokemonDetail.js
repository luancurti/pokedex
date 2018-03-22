import React, { Component, Fragment } from 'react'

import { getPokemonsById } from '../../services/poke-service'
import './index.scss'

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
          <section className='poke-detail'>
            <img src={pokemon.sprites.front_default} className='poke-detail__sprite-image' alt='sprite' />
            <div className='poke-detail__info-wrapper'>
              <h1 className='poke-detail__data-name'>Nome: {pokemon.name}</h1>
              <p className='poke-detail__data-char'>Tipo: {pokemon.types[0].type.name}</p>
            </div>
          </section>
        }
      </Fragment>
    )
  }
}

export default PokemonDetail
