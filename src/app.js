import React from 'react'
import PropTypes from 'prop-types'

import './app.scss'

const App = props => (
  <div className='app'>{props.children}</div>
)

App.propTypes = {
  children: PropTypes.object
}

export default App
