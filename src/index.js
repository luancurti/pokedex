
import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'

import App from './app'
import AppContainer from './components/AppContainer'

const markup = (
  <BrowserRouter>
    <App>
      <Switch>
        <Route exact path='/'>
          <Redirect to='/pokemons' />
        </Route>
        <Route exact path='/pokemons' component={AppContainer}/>
      </Switch>
    </App>
  </BrowserRouter>
)

render(markup, document.getElementById('app'))
