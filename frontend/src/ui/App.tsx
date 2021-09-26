import React from 'react'
import { Container } from 'react-bulma-components'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { SessionProvider } from '../contexts/SessionContext'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { PrivateRoute, PublicRoute } from './components/Route/Route'
import { Home } from './pages/Home/Home'
import { Login } from './pages/Login/Login'

export function App(): JSX.Element | null {
  return (
    <BrowserRouter>
      <SessionProvider>
        <Switch>
          <PublicRoute exact path="/login" component={Login} />
          <Route>
            <Header />
            <Container>
              <Switch>
                <PrivateRoute exact path="/" component={Home} />
              </Switch>
            </Container>
            <Footer />
          </Route>
        </Switch>
      </SessionProvider>
    </BrowserRouter>
  )
}
