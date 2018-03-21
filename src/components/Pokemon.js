'use strict'

import React from 'react'
import PropTypes from 'prop-types'

const Pokemon = ({ pokemon }) => (
  <li>{pokemon.name}</li>
)

Pokemon.propTypes = {
  pokemon: PropTypes.object.isRequired
}

export default Pokemon
