import React from 'react'
import PropTypes from 'prop-types'

import './index.css'

const App = props => (
  <div className='App'>{props.children}</div>
)

App.propTypes = {
  children: PropTypes.object
}

export default App
