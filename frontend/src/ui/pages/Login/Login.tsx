import React, { FormEvent, useState } from 'react'
import { Button, Card, Form } from 'react-bulma-components'
import styled from '@emotion/styled'
import { login } from '../../../services/session'

const Container = styled.div({
  width: '30rem',
  padding: '2rem',
  margin: 'auto',
})

export function Login(): JSX.Element {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    login(username, password).then(() => {
      window.location.reload()
    })
  }

  return (
    <Container>
      <Card>
        <Card.Content>
          <form onSubmit={onSubmit}>
            <Form.Field>
              <Form.Label htmlFor="username">Username</Form.Label>
              <Form.Input
                id="username"
                autoFocus
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </Form.Field>

            <Form.Field>
              <Form.Label htmlFor="password">Password</Form.Label>
              <Form.Input
                id="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Field>

            <Button type="submit" color="primary">
              Log in
            </Button>
          </form>
        </Card.Content>
      </Card>
    </Container>
  )
}
