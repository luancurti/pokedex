'use strict'

import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'

import App from './app'
import PokemonList from './components/PokemonList/PokemonList'
import PokemonDetail from './components/PokemonDetail/PokemonDetail'

const AppRouter = (
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
)

render(AppRouter, document.getElementById('app'))
