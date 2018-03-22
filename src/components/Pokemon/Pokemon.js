'use strict'

import React from 'react'
import PropTypes from 'prop-types'

import './index.scss'

import sprites from '../../assets/sprites.png'

const Pokemon = ({ pokemon, pokeClass, handleClick }) => {
  const { id, backgroundPosition } = pokeClass
  const style = {
    backgroundImage: `url(${sprites})`,
    backgroundPosition
  }

  return (
    <button
      onClick={() => handleClick(id)}
      style={style} className='pokemon'>
    </button>
  )
}

Pokemon.propTypes = {
  pokemon: PropTypes.object.isRequired
}

export default Pokemon
