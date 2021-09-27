import React from 'react'
import { Navbar } from 'react-bulma-components'
import { NavLink } from 'react-router-dom'
import { logout } from '../../../services/session'

export function Header(): JSX.Element {
  return (
    <Navbar color="primary">
      <Navbar.Brand>
        <Navbar.Item renderAs={NavLink} to="/">
          <img src="/brand.svg" className="mr-2" /> Mini Invoices
        </Navbar.Item>
      </Navbar.Brand>
      <Navbar.Menu>
        <Navbar.Container>
          <Navbar.Item renderAs={NavLink} to="/company" activeClassName="is-active">
            My company
          </Navbar.Item>
          <Navbar.Item renderAs={NavLink} to="/users" activeClassName="is-active">
            Users
          </Navbar.Item>
        </Navbar.Container>
        <Navbar.Container align="right">
          <Navbar.Item onClick={logout}>Logout</Navbar.Item>
        </Navbar.Container>
      </Navbar.Menu>
    </Navbar>
  )
}
