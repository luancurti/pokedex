import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as actions from '../../state-management/actions'

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

  componentDidMount () {
    this.props.actions.loadPokemons()
  }

  componentWillReceiveProps (props) {
    this.setState({
      pokemons: props.pokemons
    })
  }

  redirectToDetail (pokemonId) {
    this.props.history.push(`pokemons/${pokemonId}`)
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
                handleClick={(id) => this.redirectToDetail(id)}
                pokeClass={pokeClasses[index]} />
            )
          )}
        </div>
      </section>
    )
  }
}

function mapStateToProps (state) {
  return {
    pokemons: state.pokemons
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonList)
