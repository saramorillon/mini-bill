import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import { SessionProvider } from '../contexts/SessionContext'
import { PrivateRoute, PublicRoute } from './components/Route/Route'
import { Home } from './pages/Home/Home'
import { Login } from './pages/Login/Login'

export function App(): JSX.Element | null {
  return (
    <SessionProvider>
      <BrowserRouter>
        <Switch>
          <PublicRoute exact path="/login" component={Login} />
          <PrivateRoute exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </SessionProvider>
  )
}
