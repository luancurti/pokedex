'use strict'

import React from 'react'
import PropTypes from 'prop-types'

import './index.css'

const Pokemon = ({ pokemon }) => (
  <button className='pokemon'>{pokemon.name}</button>
)

Pokemon.propTypes = {
  pokemon: PropTypes.object.isRequired
}

export default Pokemon
