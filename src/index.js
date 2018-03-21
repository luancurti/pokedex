
import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'

import App from './app'
import PokemonList from './components/PokemonList'

const AppRouter = (
  <BrowserRouter>
    <App>
      <Switch>
        <Route exact path='/'>
          <Redirect to='/pokemons' />
        </Route>
        <Route exact path='/pokemons' component={PokemonList}/>
      </Switch>
    </App>
  </BrowserRouter>
)

render(AppRouter, document.getElementById('app'))
