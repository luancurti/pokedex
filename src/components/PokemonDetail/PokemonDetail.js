import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as actions from '../../state-management/actions'

import './index.scss'

class PokemonDetail extends Component {
  constructor () {
    super()
    this.state = {
      pokemon: {},
      pokemonId: undefined
    }
  }

  getPokemonId () {
    return this.props.location.pathname.split('/')[2]
  }

  componentWillMount () {
    this.setState({
      pokemonId: this.getPokemonId()
    })
  }

  componentWillReceiveProps (props) {
    this.setState({
      pokemon: props.pokemon
    })
  }

  componentDidMount () {
    this.props.actions.loadPokemon(this.state.pokemonId)
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

function mapStateToProps (state) {
  return {
    pokemon: state.pokemon
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail)
