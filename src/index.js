'use strict'

import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'

import store from './state-management/store'

import App from './app'
import PokemonList from './components/PokemonList/PokemonList'
import PokemonDetail from './components/PokemonDetail/PokemonDetail'

const AppRouter = (
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Switch>
          <Route exact path='/'><Redirect to='/pokemons' /></Route>
          <Route exact path='/pokemons' component={PokemonList}/>
          <Route exact path='/pokemons/:id' component={PokemonDetail}/>
          <Redirect from='*' to='/pokemons' />
        </Switch>
      </App>
    </BrowserRouter>
  </Provider>
)

render(AppRouter, document.getElementById('app'))
