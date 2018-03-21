'use strict'

import React from 'react'
import PropTypes from 'prop-types'

import './index.css'

import sprites from '../../assets/sprites.png'

const Pokemon = ({ pokemon, pokeClass }) => {
  const { backgroundPosition } = pokeClass
  const style = {
    backgroundImage: `url(${sprites})`,
    backgroundPosition
  }

  return <button style={style} className='pokemon'></button>
}

Pokemon.propTypes = {
  pokemon: PropTypes.object.isRequired
}

export default Pokemon
