import React, { Component } from 'react'

import { fetchPokemons } from '../services/poke-service'

class AppContainer extends Component {
  componentDidMount () {
    fetchPokemons()
      .then(res => {
        console.log(res)
      })
  }

  render () {
    return (
      <div className='App'>
        <h1>Ola mundo</h1>
      </div>
    )
  }
}

export default AppContainer
