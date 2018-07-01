import 'babel-polyfill'
import { createBrowserHistory } from 'history'
import {
  ConnectedRouter,
  connectRouter,
  routerMiddleware,
} from 'connected-react-router'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router'
import { applyMiddleware, compose, createStore } from 'redux'
import { apiMiddleware } from 'redux-api-middleware'
import thunk from 'redux-thunk'
import { ThemeProvider } from 'styled-components'

import { renderRoutes } from './routes/renderRoutes'
import { routes } from './routes/routes'

const history = createBrowserHistory({
  basename: process.env.NODE_ENV === 'production' ? '/' : '/',
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  connectRouter(history)(rootReducer),
  initialState,
  composeEnhancers(
    applyMiddleware(routerMiddleware(history, apiMiddleware, thunk)),
  ),
)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <ThemeProvider theme={Theme}>
        <Switch>{renderRoutes(routes)}</Switch>
      </ThemeProvider>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app'),
)
