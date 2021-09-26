import React from 'react'
import { Navbar } from 'react-bulma-components'
import { NavLink } from 'react-router-dom'
import { logout } from '../../../services/session'

export function Header(): JSX.Element {
  return (
    <Navbar colorVariant="primary">
      <Navbar.Brand>
        <Navbar.Item renderAs={NavLink} to="/">
          <img src="/brand.svg" className="mr-2" /> Mini Invoices
        </Navbar.Item>
      </Navbar.Brand>
      <Navbar.Menu>
        <Navbar.Container align="right">
          <Navbar.Item onClick={logout}>Logout</Navbar.Item>
        </Navbar.Container>
      </Navbar.Menu>
    </Navbar>
  )
}
